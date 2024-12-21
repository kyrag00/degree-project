const { db } = require("../firebase");

// Fetch entries
const getEntries = async (req, res) => {
  try {
    const userId = req.userId;
    const snapshot = await db
      .collection("JournalEntries")
      .where("userID", "==", userId)
      .get();
    const entries = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(entries);
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    res.status(500).json({ error: "Failed to fetch entries" });
  }
};

// Add entry
const addEntry = async (req, res) => {
  try {
    const newEntry = req.body;
    const docRef = await db.collection("JournalEntries").add(newEntry);
    res.json({ id: docRef.id, ...newEntry });
  } catch (error) {
    console.error("Error adding journal entry:", error);
    res.status(500).json({ error: "Failed to add entry" });
  }
};

// Update entry
const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await db.collection("JournalEntries").doc(id).update(updatedData);
    res.json({ id, ...updatedData });
  } catch (error) {
    console.error("Error updating journal entry:", error);
    res.status(500).json({ error: "Failed to update entry" });
  }
};

// Delete entry
const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("JournalEntries").doc(id).delete();
    res.json({ message: "Entry deleted successfully", id });
  } catch (error) {
    console.error("Error deleting journal entry:", error);
    res.status(500).json({ error: "Failed to delete entry" });
  }
};

module.exports = { getEntries, addEntry, updateEntry, deleteEntry };
