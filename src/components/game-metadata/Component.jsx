import React from "react";
import { Timer } from "../timer/Container";

export const GameMetaDataComponent = (props) => {
  const { level, moves, score } = props;

  return (
    <div className="metadata">
      <div className="data">
        <p>Level</p>
        <h2> {level}</h2>
      </div>
      <div className="data">
        <p>Moves</p>
        <h2> {moves}</h2>
      </div>
      <div className="data">
        <p>Score</p>
        <h2>{score}</h2>
      </div>
      <Timer />
    </div>
  );
};
