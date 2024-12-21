const express = require("express");
const {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} = require("../controllers/journalControllers");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticate, getEntries);
router.post("/", authenticate, addEntry);
router.put("/:id", authenticate, updateEntry);
router.delete("/:id", authenticate, deleteEntry);

module.exports = router;
