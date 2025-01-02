import { useState, useEffect } from "react";
import "./styles/randomFact.css";

const RandomFacts = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRandomFacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/randomfact");
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error("Error fetching random fact:", error);
      setFact("Sorry, something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomFacts();
  }, []);

  return (
    <div className="random-fact-container">
      <h2>Are you interested in a random fact? (only available in english)</h2>
      <h3>{loading ? "Loading your random fact..." : fact}</h3>
      <p className="credit-api">Data provided by: Useless Facts API</p>

      <button onClick={fetchRandomFacts}>Show Me Another Random fact</button>
    </div>
  );
};

export default RandomFacts;
