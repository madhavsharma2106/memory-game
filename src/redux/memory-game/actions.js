import {
  INCREMENT_MOVE,
  STOP_GAME,
  RESTART_GAME,
  START_GAME,
  START_LEVEL,
  NEXT_LEVEL,
  INCREMENT_SCORE,
  LEVEL_WON,
  LEVEL_LOST,
} from "./types";

export const incrementMove = () => ({ type: INCREMENT_MOVE });
export const stopGame = () => ({ type: STOP_GAME });
export const restartGame = () => ({ type: RESTART_GAME });
export const startGame = () => ({ type: START_GAME });
export const startLevel = (level) => ({ type: START_LEVEL, payload: level });
export const levelWon = (score) => ({
  type: LEVEL_WON,
  payload: score,
});
export const levelLost = () => ({
  type: LEVEL_LOST,
});
export const incrementLevel = () => {
  return { type: NEXT_LEVEL };
};
export const incrementScore = (score) => ({
  type: INCREMENT_SCORE,
  payload: score,
});
