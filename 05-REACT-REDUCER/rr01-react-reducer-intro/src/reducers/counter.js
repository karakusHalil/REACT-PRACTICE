const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";
const RESET = "RESET";

const initialCount = 0;

const countReducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialCount;
    default:
      return state;
  }
};

export { DECREMENT, INCREMENT, RESET, countReducer, initialCount };
