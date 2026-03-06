import React, { useEffect, useState } from "react";
import API from "../api";
import "./Dashboard.css";

function Flashcards() {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await API.get("/api/flashcards/random");

      console.log("Flashcards data:", res.data);

      setCards(res.data);
      setFlipped({});
      setLoading(false);
    } catch (err) {
      console.error("Flashcard error:", err);
      setError("Failed to load flashcards");
      setLoading(false);
    }
  };

  const handleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>🧠 Flashcards</h2>
          <p>Loading flashcards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>🧠 Flashcards</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>🧠 Flashcards</h2>

        <div className="dashboard-stats">

          {cards.map((card) => (
            <div
              key={card.id}
              className="stat-box"
              onClick={() => handleFlip(card.id)}
              style={{ cursor: "pointer" }}
            >
              {flipped[card.id] ? (
                <p>{card.answer}</p>
              ) : (
                <h3>{card.question}</h3>
              )}
            </div>
          ))}

        </div>

        <button className="logout-btn" onClick={fetchCards}>
          🔄 Load New Flashcards
        </button>

      </div>
    </div>
  );
}

export default Flashcards;