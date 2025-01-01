import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import "../styles/journal.css";
import { IJournalEntries } from "../interfaces/IJournalEntry";
import {
  fetchEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} from "../journalAPI";
import { Timestamp } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Journal = () => {
  const user = useAuth();
  const { t } = useTranslation();

  const [entries, setEntries] = useState<IJournalEntries[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [editEntryId, setEditEntryId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<IJournalEntries>>({});

  useEffect(() => {
    const fetchEntriesFromBackend = async () => {
      if (!user) return;

      try {
        const token = await user.getIdToken();
        const data = await fetchEntries(token);
        setEntries(data);
      } catch (error) {
        console.error(t("journal.errorFetchingEntries"), error);
      }
    };

    fetchEntriesFromBackend();
  }, [user, t]);

  if (!user) {
    return <h2>{t("journal.pleaseLogIn")}</h2>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      const newEntry = {
        title,
        content,
        mood,
        createdAt: Timestamp.now(),
        userID: user.uid,
      };

      const token = await user.getIdToken();
      const addedEntry = await addEntry(newEntry, token);
      setEntries((prevEntries) => [...prevEntries, addedEntry]);

      setTitle("");
      setContent("");
      setMood("");
    } catch (error) {
      console.error(t("journal.errorAddingEntry"), error);
    }
  };

  const handleDelete = async (entryId: string) => {
    if (window.confirm(t("journal.confirmDelete"))) {
      try {
        const token = await user.getIdToken();
        await deleteEntry(entryId, token);
        setEntries((prevEntries) =>
          prevEntries.filter((entry) => entry.id !== entryId)
        );
      } catch (error) {
        console.error(t("journal.errorDeletingEntry"), error);
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
      const token = await user.getIdToken();
      await updateEntry(entryId, updatedEntry, token);

      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry.id === entryId ? { ...entry, ...updatedEntry } : entry
        )
      );

      setEditEntryId(null); // exit edit mode
    } catch (error) {
      console.error(t("journal.errorSavingEntry"), error);
    }
  };

  const handleCancel = () => {
    setEditEntryId(null); // exit edit mode without saving
    setEditValues({});
  };

  const formatDate = (
    createdAt: Timestamp | { _seconds: number; _nanoseconds: number }
  ) => {
    if (createdAt instanceof Timestamp) {
      return createdAt.toDate().toLocaleDateString();
    }

    if (createdAt && createdAt._seconds) {
      const date = new Date(createdAt._seconds * 1000);
      return date.toLocaleDateString();
    }

    return t("journal.unknownDate");
  };

  return (
    <div className="journal-container">
      <h2>
        {t("journal.welcomeMessage", { name: user.firstName || user.email })}
      </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">{t("journal.title")}</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">{t("journal.content")}</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mood">{t("journal.mood")}</label>
          <input
            id="mood"
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
          />
        </div>
        <button type="submit">{t("journal.addEntry")}</button>
      </form>

      <ul>
        {entries.map((entry) => (
          <li className="journal-entries" key={entry.id}>
            {editEntryId === entry.id ? (
              <div className="edit-textfield">
                <input
                  name="title"
                  value={editValues.title || ""}
                  onChange={handleEditChange}
                  placeholder={t("journal.placeholderTitle")}
                />
                <textarea
                  name="content"
                  value={editValues.content || ""}
                  onChange={handleEditChange}
                  placeholder={t("journal.placeholderContent")}
                />
                <input
                  name="mood"
                  value={editValues.mood || ""}
                  onChange={handleEditChange}
                  placeholder={t("journal.placeholderMood")}
                />
                <button onClick={() => handleSave(entry.id)}>
                  {t("journal.save")}
                </button>
                <button onClick={handleCancel}>{t("journal.cancel")}</button>
              </div>
            ) : (
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                <p>
                  {t("journal.mood")}: {entry.mood}
                </p>
                <p>
                  {t("journal.date")}{" "}
                  {entry.createdAt
                    ? formatDate(entry.createdAt)
                    : t("journal.unknownDate")}
                </p>
                <button onClick={() => handleEdit(entry)}>
                  {t("journal.edit")}
                </button>
                <button onClick={() => handleDelete(entry.id)}>
                  {t("journal.delete")}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
