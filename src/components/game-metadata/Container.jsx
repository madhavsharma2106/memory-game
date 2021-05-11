import React from "react";
import { useSelector } from "react-redux";
import { GameMetaDataComponent } from "./Component";

export const GameMetaData = () => {
  const level = useSelector((state) => state.memoryGame.level);
  const moves = useSelector((state) => state.memoryGame.moves);
  const score = useSelector((state) => state.memoryGame.score);

  return <GameMetaDataComponent level={level} moves={moves} score={score} />;
};
