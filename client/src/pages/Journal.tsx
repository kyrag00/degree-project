import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/journal.css"

const Journal = () => {
  const user = useAuth();

  interface IJournalEntries {
    id: string;
    title: string;
    content: string;
    mood: string;
  }

  const [entries, setEntries] = useState<IJournalEntries[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "JournalEntries"),
          where("userID", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const fetchedEntries: IJournalEntries[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<IJournalEntries, "id">),
          })
        );
        setEntries(fetchedEntries);
      } catch (error) {
        console.error("Error fetching journal entries:", error);
      }
    };

    fetchEntries();
  }, [user]);

  if (!user) {
    return <h2>Please log in to view your journal.</h2>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      const newEntry = {
        title,
        content,
        mood,
        userID: user.uid,
      };

      const docRef = await addDoc(collection(db, "JournalEntries"), newEntry);

      setEntries((prevEntries) => [
        ...prevEntries,
        { id: docRef.id, ...newEntry },
      ]);

      setTitle("");
      setContent("");
      setMood("");
    } catch (error) {
      console.error("Error adding journal entry:", error);
    }
  };

  return (
    <div className="journal-container">
      <h2>Welcome to your journal, {user.email}!</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mood">Mood:</label>
          <input
            id="mood"
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>

      <ul>
        {entries.map((entry) => (
          <li className="journal-entries" key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <p>Mood: {entry.mood}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
