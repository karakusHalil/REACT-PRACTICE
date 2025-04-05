import {
  DECREMENT,
  TWODECREMENT,
  INCREMENT,
  TWOINCREMENT,
  SQUARE,
  SQUAREROOT,
  RESET,
} from "./actionTypes";

const initialCount = 0;

const countReducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialCount;
    case TWODECREMENT:
      return state - 2;
    case TWOINCREMENT:
      return state + 2;
    case SQUARE:
      return state * state;
    case SQUAREROOT:
      return Math.sqrt(state);
    default:
      return state;
  }
};

export { countReducer, initialCount };
