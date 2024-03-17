// App.js
import React, { useState } from "react";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <h1>Exploding Kittens Game</h1>
      <label htmlFor="username">Enter Your Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />
      {username && <Game username={username} />}
      <Leaderboard />
    </div>
  );
}

export default App;
