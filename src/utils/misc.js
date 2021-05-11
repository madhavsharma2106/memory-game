import { customers } from "./cards";

export const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const createDeck = (size) => {
  const deck = [];
  let index = 0;
  while (index < size / 2) {
    deck.push(customers[index % customers.length]);
    index++;
  }
  return shuffle([...deck, ...deck]);
};

export const setTimer = (time) => {
  const t = new Date();
  return t.setSeconds(t.getSeconds() + time);
};

export const PLAYER_STATE = {
  lost: "lost",
  won: "won",
  notPlayed: "notPlayed",
  isPlaying: "isPlaying",
};

export const calculateScore = (endTime, moves, level) => {
  let tNow = new Date();
  let secondsLeft = new Date(endTime - tNow).getSeconds();
  return Math.floor(secondsLeft * 2 - moves/2) ;
};
