const express = require("express");
const cors = require("cors");
const journalRoutes = require("./routes/journalRoutes");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/journal", journalRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Journal API!");
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server is running..."));
