import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id != todoId)]);
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <TodoCreate onCreateTodo={createTodo} />
          <TodoList todos={todos} onRemoveTodo={removeTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
