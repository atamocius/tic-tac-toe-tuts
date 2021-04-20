import classes from "./game.module.css";

import React from "react";

import Board from "./board";

export default function Game() {
  const data = {
    // prettier-ignore
    squares: [
      null, null, null,
      null, '🍄', '🍌',
      '🍄', null, '🍌',
    ],
    next: "🍄",
  };

  const status = `Next player: ${data.next}`;

  const handleClick = (i) => {
    console.log(i);
  };

  return (
    <div className={classes.root}>
      <div>
        <Board squares={data.squares} onClick={handleClick} />
        <div className={classes.status}>{status}</div>
      </div>
    </div>
  );
}
