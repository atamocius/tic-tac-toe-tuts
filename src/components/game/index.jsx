import classes from "./index.module.css";

import React, { useReducer } from "react";

import Board from "../board";

import * as game from "../../logic/game";

export default function Game() {
  const [gameState, gameDispatch] = useReducer(game.reducer, game.initialState);

  const handleClick = (i) => {
    gameDispatch(game.putToken(i));
  };

  const { squares, next, winner } = gameState;

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
