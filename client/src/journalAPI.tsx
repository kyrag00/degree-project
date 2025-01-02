import axios from "axios";
import { IJournalEntries } from "./interfaces/IJournalEntry";

// Set the base URL globally for all axios requests
axios.defaults.baseURL = 'https://digital-diary-dd759bbb7354.herokuapp.com';

// Fetch all journal entries
export const fetchEntries = async (
  token: string
): Promise<IJournalEntries[]> => {
  const response = await axios.get("/journal", { 
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a new journal entry
export const addEntry = async (
  entry: Omit<IJournalEntries, "id">,
  token: string
): Promise<IJournalEntries> => {
  const response = await axios.post("/journal", entry, { 
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
  const response = await axios.put(`/journal/${id}`, entry, { 
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a journal entry
export const deleteEntry = async (id: string, token: string): Promise<void> => {
  await axios.delete(`/journal/${id}`, { 
    headers: { Authorization: `Bearer ${token}` },
  });
};
