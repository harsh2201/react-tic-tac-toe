import React, { useEffect, useState } from "react";
import Square from "./Square";
import "../styles/Box.css";

const winArray = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [8, 5, 2],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Box({
  className,
  currentPlayer,
  setCurrentPlayer,
  setWinner,
  winner,
}) {
  const [squareArray, setSquareArray] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  const fillWithEmptySquare = () => {
    let temp = [];
    for (let i = 0; i < 9; i++) {
      temp[i] = "";
    }
    setSquareArray(temp);
  };

  useEffect(() => {
    fillWithEmptySquare();
  }, []);

  const checkIfWin = () => {
    for (let winIndices in winArray) {
      let indices = winArray[winIndices];

      if (
        squareArray[indices[0]] === "" ||
        squareArray[indices[1]] === "" ||
        squareArray[indices[2]] === ""
      ) {
        continue;
      }

      if (
        squareArray[indices[0]] === squareArray[indices[1]] &&
        squareArray[indices[2]] === squareArray[indices[0]]
      ) {
        setWinner(squareArray[indices[0]]);
        return;
      } else if (moveCount > 7) setWinner("Draw");
    }
  };

  const boxClickCallback = (index) => {
    if (
      squareArray[index] !== "" ||
      moveCount > 8 ||
      winner === "X" ||
      winner === "O"
    ) {
      return;
    }

    let temp = squareArray;
    temp[index] = currentPlayer;
    setSquareArray(temp);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setMoveCount((prevState) => {
      return prevState + 1;
    });
    console.log("Reached moveCount", moveCount);
    checkIfWin();
  };

  const playAgainCallback = () => {
    setMoveCount(0);
    setWinner("");
    setCurrentPlayer("X");
    fillWithEmptySquare();
  };

  return (
    <div className={className}>
      <div className="box-row">
        <Square key={0} index={0} boxClickCallback={boxClickCallback}>
          {squareArray[0]}
        </Square>
        <Square key={1} index={1} boxClickCallback={boxClickCallback}>
          {squareArray[1]}
        </Square>
        <Square key={2} index={2} boxClickCallback={boxClickCallback}>
          {squareArray[2]}
        </Square>
      </div>
      <div className="box-row">
        <Square key={3} index={3} boxClickCallback={boxClickCallback}>
          {squareArray[3]}
        </Square>
        <Square key={4} index={4} boxClickCallback={boxClickCallback}>
          {squareArray[4]}
        </Square>
        <Square key={5} index={5} boxClickCallback={boxClickCallback}>
          {squareArray[5]}
        </Square>
      </div>
      <div className="box-row">
        <Square key={6} index={6} boxClickCallback={boxClickCallback}>
          {squareArray[6]}
        </Square>
        <Square key={7} index={7} boxClickCallback={boxClickCallback}>
          {squareArray[7]}
        </Square>
        <Square key={8} index={8} boxClickCallback={boxClickCallback}>
          {squareArray[8]}
        </Square>
      </div>
      {winner !== "" && (
        <button className="play-again-button" onClick={playAgainCallback}>
          Play Again!
        </button>
      )}
    </div>
  );
}
