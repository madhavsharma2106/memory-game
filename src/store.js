import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { memoryGameReducer } from "./redux/memory-game/reducer";

const rootReducer = combineReducers({
  memoryGame: memoryGameReducer,
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);
