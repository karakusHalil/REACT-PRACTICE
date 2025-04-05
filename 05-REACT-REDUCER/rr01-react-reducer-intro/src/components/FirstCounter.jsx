import { useState } from "react";

function FirstCounter() {
  const [count, setCount] = useState(0);
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
    </>
  );
}

export default FirstCounter;
