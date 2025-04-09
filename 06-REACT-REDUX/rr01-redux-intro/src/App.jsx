import { useDispatch, useSelector } from "react-redux";
import {
  added,
  decrement,
  increment,
  reset,
  subtracted,
} from "./store/counter/counterSlice";
import ToDoForm from "./components/todo/ToDoForm";

function App() {
  const value = useSelector((store) => store.counter.value);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>REDUX TOOLKIT</h1>
      <h3>Counter : {value}</h3>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <br />
      <hr />
      <br />
      <input type="number" id="number" />
      <button
        onClick={() =>
          dispatch(added(Number(document.getElementById("number").value)))
        }
      >
        ADDED
      </button>
      <button
        onClick={() =>
          dispatch(subtracted(Number(document.getElementById("number").value)))
        }
      >
        Subtracted
      </button>
      <hr />
      <h2>TODO LIST</h2>
      <ToDoForm />
    </>
  );
}

export default App;
