import { useReducer } from "react";
import { initialTodo, toDoReducer } from "../../reducers/todo/todo";
import { ADD_TODO, REMOVE_TODO, RESET } from "../../reducers/todo/actionTypes";

function TodoForm() {
  const [todoList, dispatch] = useReducer(toDoReducer, initialTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    console.log(inputValue);
    if (inputValue === "") {
      alert("lütfen inputu doldurunuz");
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
          <button type="submit">ADD</button>
        </form>
        <ul>
          {todoList.todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}
            >
              {todo.title} - {todo.id}
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: RESET })}>RESET</button>
      </div>
    </>
  );
}

export default TodoForm;
