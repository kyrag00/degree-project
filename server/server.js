const express = require("express");
const cors = require("cors");
const journalRoutes = require("./routes/journalRoutes");

const app = express();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const allowedOrigins = [
  "http://localhost:5173", // local development
  "https://degree-project-dadd0.web.app", // deployed Firebase app
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use("/journal", journalRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Journal API!");
});

app.get("/api/randomfact", async (req, res) => {
  try {
    console.log("Fetching from Useless Facts API...");

    const response = await fetch("https://uselessfacts.jsph.pl/random.json");

    if (!response.ok) {
      console.error("Useless Facts API error:", response.statusText);
      return res
        .status(500)
        .json({ error: "Failed to fetch random fact from Useless Facts API" });
    }

    const data = await response.json();
    // console.log("Fetched data:", data);

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch random fact" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server is running..."));
