import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { memoryGameReducer } from "./redux/memory-game/reducer";
import { persistentMiddleWare } from "./utils/persistentMiddleWare";

const rootReducer = combineReducers({
  memoryGame: memoryGameReducer,
});

// Custom Middleware to Persist level and score.
const middlewares = [thunk, persistentMiddleWare];

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);
