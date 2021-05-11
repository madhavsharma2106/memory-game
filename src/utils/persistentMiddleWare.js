import { NEXT_LEVEL, RESTART_GAME } from "../redux/memory-game/types";

// Custom Middle ware to remember score and level
export const persistentMiddleWare = (store) => (next) => (action) => {
  const { level, score } = store.getState().memoryGame;

  switch (action.type) {
    case NEXT_LEVEL:
      localStorage.setItem("level", level + 1);
      localStorage.setItem("score", score);
      break;
    case RESTART_GAME:
      localStorage.setItem("level", 1);
      localStorage.setItem("score", 0);
      break;
    default:
      localStorage.setItem("level", level);
      localStorage.setItem("score", score);
      break;
  }

  next(action);
};
