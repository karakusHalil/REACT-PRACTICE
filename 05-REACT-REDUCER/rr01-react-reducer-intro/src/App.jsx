import { useReducer, useState } from "react";
import {
  countReducer,
  DECREMENT,
  INCREMENT,
  initialCount,
  RESET,
} from "./reducers/counter";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  const [counter, dispatch] = useReducer(countReducer, initialCount);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>React Reducer</h1>

        <h2>1.Yöntem</h2>
        <h3>Counter : {count}</h3>
        <div>
          <button onClick={() => setCount((prev) => prev - 1)}> - </button>
          <button onClick={() => setCount(0)}>RESET</button>
          <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>2.Yöntem</h2>
        <h3>Counter : {count}</h3>
        <div>
          <button onClick={()=>decrement}> - </button>
          <button onClick={()=>reset}>RESET</button>
          <button onClick={()=>increment}> + </button>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>3.Yöntem Reducer</h2>
        <h3>Counter : {counter}</h3>
        <div>
          <button onClick={() => dispatch(DECREMENT)}> - </button>
          <button onClick={() => dispatch(RESET)}>RESET</button>
          <button onClick={() => dispatch(INCREMENT)}> + </button>
        </div>
      </div>
    </>
  );
}

export default App;
