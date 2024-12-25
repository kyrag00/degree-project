import axios from "axios";
import { IJournalEntries } from "./interfaces/IJournalEntry";

const API_BASE_URL = "http://localhost:3000/journal";

// Fetch all journal entries
export const fetchEntries = async (
  token: string
): Promise<IJournalEntries[]> => {
  const response = await axios.get(API_BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a new journal entry
export const addEntry = async (
  entry: Omit<IJournalEntries, "id">,
  token: string
): Promise<IJournalEntries> => {
  const response = await axios.post(API_BASE_URL, entry, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update an existing journal entry
export const updateEntry = async (
  id: string,
  entry: Partial<Omit<IJournalEntries, "id">>,
  token: string
): Promise<IJournalEntries> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, entry, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a journal entry
export const deleteEntry = async (id: string, token: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
