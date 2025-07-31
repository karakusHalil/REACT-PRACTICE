import "./App.css";
import useCounter from "./hooks/useCounter";
import useToogle from "./hooks/useToogle";

function App() {
  const { count, increase, decrease } = useCounter();

  const { open, change } = useToogle();
  return (
    <>
      {/* <div className="counter">
        <div>{count}</div>
        <div>
          <button onClick={increase}>Arttır</button>
          <button onClick={decrease}>Azalt</button>
        </div>
      </div> */}
      <div className="box-list">
        {open && <div className="box">kutu</div>}

        <button onClick={change}>{open ? "Gizle" : "Göster"}</button>
      </div>
    </>
  );
}

export default App;
