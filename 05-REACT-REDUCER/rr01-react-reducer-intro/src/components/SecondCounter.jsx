import { useState } from "react";

function SecondCounter() {

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
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>2.Yöntem</h2>
        <h3>Counter : {count}</h3>
        <div>
          <button onClick={decrement}> - </button>
          <button onClick={reset}>RESET</button>
          <button onClick={increment}> + </button>
        </div>
      </div>
    </>
  );
}

export default SecondCounter;
