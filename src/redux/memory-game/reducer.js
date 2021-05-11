import { PLAYER_STATE, setTimer } from "../../utils/misc";
import {
  INCREMENT_MOVE,
  RESTART_GAME,
  STOP_GAME,
  START_GAME,
  START_LEVEL,
  NEXT_LEVEL,
  LEVEL_LOST,
  LEVEL_WON,
} from "./types";

const initialState = {
  level: parseInt(localStorage.getItem("level")) || 1,
  moves: 0,
  endTime: null,
  score: parseInt(localStorage.getItem("score")) || 0,
  playerState: PLAYER_STATE.notPlayed,
};

export const memoryGameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_MOVE: {
      state.moves = state.moves + 1;
      break;
    }

    case STOP_GAME: {
      state.isPlaying = false;
      state.levelOutcome = payload;
      break;
    }

    case RESTART_GAME: {
      state.level = 1;
      state.moves = 0;
      state.score = 0;
      state.endTime = setTimer(22);
      state.playerState = PLAYER_STATE.isPlaying;
      break;
    }

    case START_GAME: {
      state.level = parseInt(localStorage.getItem("level")) || 1;
      state.moves = 0;
      state.endTime = setTimer(22);
      state.playerState = PLAYER_STATE.isPlaying;
      break;
    }

    case START_LEVEL: {
      state.level = payload;
      state.moves = 0;
      state.endTime = setTimer(22);
      state.playerState = PLAYER_STATE.isPlaying;
      break;
    }

    case LEVEL_WON: {
      state.playerState = PLAYER_STATE.won;
      state.score = state.score + payload;
      break;
    }

    case LEVEL_LOST: {
      state.playerState = PLAYER_STATE.lost;
      break;
    }
    case NEXT_LEVEL: {
      state.playerState = PLAYER_STATE.isPlaying;
      state.level = state.level + 1;
      state.moves = 0;
      state.endTime = setTimer(22);
      break;
    }

    default: {
      break;
    }
  }
  return state;
};
