// Deck.js
import React, { useState } from "react";
import axios from "axios";

const Deck = ({ username }) => {
  const [deck, setDeck] = useState([
    "Cat",
    "Cat",
    "Defuse",
    "Shuffle",
    "Exploding Kitten",
  ]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const drawCard = () => {
    if (deck.length === 0) return;

    const card = deck.pop();
    setDeck([...deck]);
    setDrawnCards([...drawnCards, card]);

    if (card === "Exploding Kitten") {
      setGameOver(true);
      saveScore(username, false); // Save user score if game over
    } else if (deck.length === 0) {
      setGameOver(true);
      saveScore(username, true); // Save user score if game won
    }
  };

  const saveScore = async (username, gameWon) => {
    try {
      await axios.post("/api/saveScore", { username, gameWon });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  return (
    <div>
      <h2>Deck</h2>
      <button onClick={drawCard}>Draw Card</button>
      <div>
        {drawnCards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      {gameOver && <div>{deck.length === 0 ? "You won!" : "Game over!"}</div>}
    </div>
  );
};

export default Deck;
