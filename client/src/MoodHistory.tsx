import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { IJournalEntries } from "./interfaces/IJournalEntry";
import { fetchEntries } from "./journalAPI";
import { Timestamp } from "firebase/firestore";
import "./styles/moods.css";
import { useTranslation } from "react-i18next";

const MoodHistory = () => {
  const user = useAuth();
  const [moodHistory, setMoodHistory] = useState<IJournalEntries[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMoodHistory = async () => {
      if (!user) return;

      try {
        const token = await user.getIdToken();
        const entries = await fetchEntries(token);

        // filter only entries with a mood and sort by createdAt descending
        const filteredEntries = entries
          .filter((entry) => entry.mood)
          .sort((a, b) => {
            const aDate = a.createdAt
              ? new Date(a.createdAt.seconds * 1000).getTime()
              : 0;
            const bDate = b.createdAt
              ? new Date(b.createdAt.seconds * 1000).getTime()
              : 0;

            return bDate - aDate;
          });

        setMoodHistory(filteredEntries);
      } catch (error) {
        console.error("Error fetching mood history:", error);
      }
    };

    fetchMoodHistory();
  }, [user]);

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

    return t("moodHistory.unknownDate");
  };

  return (
    <div className="mood-container">
      <h3>{t("moodHistory.title")}</h3>
      <div>
        {moodHistory.length > 0 ? (
          <ul>
            {moodHistory.map((entry) => (
              <li key={entry.id}>
                <p>
                  <strong>
                    {entry.createdAt
                      ? formatDate(entry.createdAt)
                      : t("moodHistory.unknownDate")}
                  </strong>
                  <span className="mood">: {entry.mood}</span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">{t("moodHistory.emptyState")}</p>
        )}
      </div>
    </div>
  );
};

export default MoodHistory;
