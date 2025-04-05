import { useReducer } from "react";
import {
  countReducer,
  DECREMENT,
  INCREMENT,
  initialCount,
  RESET,
  SQUARE,
  SQUAREROOT,
  TWODECREMENT,
  TWOINCREMENT,
} from "../reducers";

function ThirdCounter() {
  const [counter, dispatch] = useReducer(countReducer, initialCount);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>3.Yöntem Reducer</h2>
        <h3>Counter : {counter}</h3>
        <div>
          <button onClick={() => dispatch(SQUAREROOT)}> ^-2 </button>
          <button onClick={() => dispatch(TWODECREMENT)}> -2 </button>
          <button onClick={() => dispatch(DECREMENT)}> - </button>
          <button onClick={() => dispatch(RESET)}>RESET</button>
          <button onClick={() => dispatch(INCREMENT)}> + </button>
          <button onClick={() => dispatch(TWOINCREMENT)}> +2 </button>
          <button onClick={() => dispatch(SQUARE)}> ^2 </button>
        </div>
      </div>
    </>
  );
}

export default ThirdCounter;
