import { useReducer } from "react";
import Counter from "./components/Counter";
import { ADD, DELETE, initialValue, todoReducer } from "./reducers/todos/todos";
import TodoForm from "./components/todos/TodoForm";

function App() {
  const [todo, dispatch] = useReducer(todoReducer, initialValue);
  return (
    <>
      <Counter />
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>TODO</h1>
        <h3>TODO : {todo.count}</h3>

        <div>
          <button onClick={() => dispatch({ type: DELETE, payload: 15 })}>
            -
          </button>

          <button onClick={() => dispatch({ type: ADD, payload: 15 })}>+</button>
        </div>
      </div>
      <TodoForm/>
    </>
  );
}

export default App;
