import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Reducer</h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
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
          <button onClick={() => setCount((prev) => prev - 1)}> - </button>
          <button onClick={() => setCount(0)}>RESET</button>
          <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>3.Yöntem Reducer</h2>
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

export default App;
