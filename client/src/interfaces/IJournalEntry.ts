import { Timestamp } from "firebase/firestore";

export interface IJournalEntries {
  id: string;
  title: string;
  content: string;
  mood: string;
  createdAt?: Timestamp;
}
