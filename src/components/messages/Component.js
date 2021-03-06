import React from "react";
import { PLAYER_STATE } from "../../utils/misc";

export const MessagesComponent = (props) => {
  const { gameBegin, playerState, nextLevel, restart, level } = props;

  const renderMessage = () => {
    switch (playerState) {
      case PLAYER_STATE.won: {
        return (
          <>
            <p>Congrats! You've won this round.</p>
            <button onClick={nextLevel}>Play the next level</button>
          </>
        );
      }
      case PLAYER_STATE.lost: {
        return (
          <>
            <p>Try again, maybe?</p>
            <button onClick={restart}>Retry</button>
          </>
        );
      }
      case PLAYER_STATE.isPlaying: {
        return <p>Best of luck.</p>;
      }
      default:
      case PLAYER_STATE.notPlayed: {
        return level > 1 ? (
          <>
            <p>Nice to see you back.</p>
            <div>
              <button onClick={gameBegin}>Continue </button>
              <button onClick={restart}>Restart </button>
            </div>
          </>
        ) : (
          <>
            <p>Welcome to the Memory Game.</p>
            <button onClick={gameBegin}>Start </button>
          </>
        );
      }
    }
  };

  return <div className="message-area">{renderMessage()}</div>;
};
