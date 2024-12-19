import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/journal.css";

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
  const [editEntryId, setEditEntryId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<IJournalEntries>>({});

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

  const handleDelete = async (entryId: string) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(doc(db, "JournalEntries", entryId));
        setEntries((prevEntries) =>
          prevEntries.filter((entry) => entry.id !== entryId)
        );
      } catch (error) {
        console.error("Error deleting entry:", error);
      }
    }
  };

  const handleEdit = (entry: IJournalEntries) => {
    setEditEntryId(entry.id); // the entry being edited
    setEditValues(entry); 
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value })); 
  };

  const handleSave = async (entryId: string) => {
    if (!user || !editValues) return;

    try {
      const updatedEntry = {
        title: editValues.title || "",
        content: editValues.content || "",
        mood: editValues.mood || "",
      };
      await updateDoc(doc(db, "JournalEntries", entryId), updatedEntry);

      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry.id === entryId ? { ...entry, ...updatedEntry } : entry
        )
      );

      setEditEntryId(null); // exit edit mode
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  const handleCancel = () => {
    setEditEntryId(null); // exit edit mode without saving
    setEditValues({});
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
            {editEntryId === entry.id ? (
              <div>
                <input
                  name="title"
                  value={editValues.title || ""}
                  onChange={handleEditChange}
                  placeholder="Title"
                />
                <textarea
                  name="content"
                  value={editValues.content || ""}
                  onChange={handleEditChange}
                  placeholder="Content"
                />
                <input
                  name="mood"
                  value={editValues.mood || ""}
                  onChange={handleEditChange}
                  placeholder="Mood"
                />
                <button onClick={() => handleSave(entry.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                <p>Mood: {entry.mood}</p>
                <button onClick={() => handleEdit(entry)}>Edit</button>
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
