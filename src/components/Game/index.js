// Game.js
import React, { useState } from "react";
import Deck from "../Deck";

const Game = ({ username }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted && <button onClick={handleStartGame}>Start Game</button>}
      {gameStarted && <Deck username={username} />}
    </div>
  );
};

export default Game;
