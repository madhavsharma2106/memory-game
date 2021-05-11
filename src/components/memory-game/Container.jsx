import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelWon, incrementMove } from "../../redux/memory-game/actions";
import { calculateScore, PLAYER_STATE } from "../../utils/misc";
import { MemoryGameComponent } from "./Component";

export const MemoryGame = () => {
  const dispatch = useDispatch();

  const level = useSelector((state) => state.memoryGame.level);
  const moves = useSelector((state) => state.memoryGame.moves);
  const endTime = useSelector((state) => state.memoryGame.endTime);
  const playerState = useSelector((state) => state.memoryGame.playerState);

  const computeGridSize = (level + 1) * 2;

  const onMovePlayed = () => dispatch(incrementMove());
  const gameComplete = () => {
    if (playerState === PLAYER_STATE.won) return;
    dispatch(levelWon(calculateScore(endTime, moves)));
  };

  return (
    <MemoryGameComponent
      gridSize={computeGridSize}
      onMovePlayed={onMovePlayed}
      gameComplete={gameComplete}
      endTime={endTime}
      playerState={playerState}
    />
  );
};
