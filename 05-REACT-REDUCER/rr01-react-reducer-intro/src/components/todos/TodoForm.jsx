import { useReducer, useState } from "react";
import { initialTodo, toDoReducer } from "../../reducers/todo/todo";
import { ADD_TODO } from "../../reducers/todo/actionTypes";

function TodoForm() {
  const [todoList, dispatch] = useReducer(toDoReducer, initialTodo);
  const[error,setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    console.log(inputValue);
    if (inputValue === "") {
      setError("lütfen inputu doldurunuz");
      return;
    } else {
      dispatch({ type: ADD_TODO, payload: inputValue });
      e.target.reset();
    }
  };

  return (
    <>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>To Do Form</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit" disabled={handleSubmit.inputValue === ""}>ADD</button>
        </form>
        <ul>
          {todoList.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoForm;
