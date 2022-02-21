import React, { useState } from "react";
import Box from "./components/Box";
import Confetti from "react-confetti";

import "./styles/Game.css";

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="game-container">
      <div className="player-turn-text">
        {winner !== "X" && winner !== "O"
          ? winner === "Draw"
            ? "It's a draw!"
            : "Player " + currentPlayer + "'s turn"
          : "Player " + winner + " is the winner 🥳"}
      </div>
      <Box
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setWinner={setWinner}
        winner={winner}
        className="box-container"
      />
      {(winner === "X" || winner === "O") && (
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          width={width}
          height={height}
        />
      )}
    </div>
  );
}
