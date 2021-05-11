import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementLevel,
  restartGame,
  startGame,
} from "../../redux/memory-game/actions";
import { MessagesComponent } from "./Component";

export const Messages = () => {
  const dispatch = useDispatch();
  const gameBegin = () => dispatch(startGame());
  const playerState = useSelector((state) => state.memoryGame.playerState);

  const nextLevel = () => dispatch(incrementLevel());
  const restart = () => dispatch(restartGame());

  return (
    <MessagesComponent
      gameBegin={gameBegin}
      playerState={playerState}
      nextLevel={nextLevel}
      restart={restart}
    />
  );
};
