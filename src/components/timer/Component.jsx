import React, { useEffect, useState } from "react";
import { PLAYER_STATE } from "../../utils/misc";

let interval;

export const TimerComponent = (props) => {
  const { endTime, timeUp, playerState } = props;
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    if (!endTime) return;
    if (playerState !== PLAYER_STATE.isPlaying) return;

    interval = setInterval(() => {
      let tNow = new Date();

      let secondsLeft = new Date(endTime - tNow).getSeconds();
      let composeTime = `00:${secondsLeft}`;

      // Stop game
      if (secondsLeft === 0) timeUp();
      setTime(composeTime);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [endTime]);

  if (playerState !== PLAYER_STATE.isPlaying) clearInterval(interval);

  return (
    <div className="data">
      <p>Time Left</p>
      <h2>
        {playerState === PLAYER_STATE.lost ? (
          <span style={{ color: "red" }}>00:00</span>
        ) : (
          time
        )}
      </h2>
    </div>
  );
};
