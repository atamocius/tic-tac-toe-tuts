import classes from "./game.module.css";

import React, { useState, useEffect } from "react";

import Board from "./board";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [next, setNext] = useState("🍄");
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (winner !== null || squares[i] !== null) {
      return;
    }

    const squaresCopy = squares.slice();
    squaresCopy[i] = next;

    setSquares(squaresCopy);
    setNext(next === "🍄" ? "🍌" : "🍄");
  };

  useEffect(() => {
    setWinner(calcWinner(squares));
  }, [squares]);

  const status = winner === null ? `Next player: ${next}` : `Winner: ${winner}`;

  return (
    <div className={classes.root}>
      <div>
        <Board squares={squares} onClick={handleClick} />
        <div className={classes.status}>{status}</div>
      </div>
    </div>
  );
}

function calcWinner(squares) {
  const lines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    const x = squares[a];
    const y = squares[b];
    const z = squares[c];

    if (x !== null && x === y && y === z) {
      return x;
    }
  }

  return null;
}
