import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelLost } from "../../redux/memory-game/actions";
import { PLAYER_STATE } from "../../utils/misc";
import { TimerComponent } from "./Component";

export const Timer = () => {
  const endTime = useSelector((state) => state.memoryGame.endTime);
  const playerState = useSelector((state) => state.memoryGame.playerState);

  const dispatch = useDispatch();
  const timeUp = () => dispatch(levelLost(PLAYER_STATE.lost));

  return (
    <TimerComponent
      endTime={endTime}
      timeUp={timeUp}
      playerState={playerState}
    />
  );
};
