import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      <div className="counter">
        <div>{count}</div>
        <div>
          <button onClick={increase}>Arttır</button>
          <button onClick={decrease}>Azalt</button>
        </div>
      </div>
    </>
  );
}

export default App;
