import { PLAYER_STATE } from "../../utils/misc";

export const Card = (props) => {
  const { name, isFlipped, index, flipCard, playerState, ...rest } = props;

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        playerState !== PLAYER_STATE.isPlaying ? "disabled" : ""
      }`}
      key={index}
      onClick={() =>
        playerState !== PLAYER_STATE.isPlaying ? null : flipCard(index)
      }
      {...rest}
    >
      <div className="inner">
        <div className="front">{name}</div>
        <div className="back"></div>
      </div>
    </div>
  );
};
