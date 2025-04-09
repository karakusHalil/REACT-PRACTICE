import { useSelector } from "react-redux";

function App() {
  const value = useSelector((store) => store.counter.value);
  console.log(value);
  return (
    <>
      <h1>REDUX TOOLKIT</h1>
      <h3>Counter : </h3>
      <button>DECREMENT</button>
      <button>INCREMENT</button>
      <button>RESET</button>
      <br />
      <hr />
      <br />
      <input type="number" id="number" />
      <button>ADDED</button>
    </>
  );
}

export default App;
