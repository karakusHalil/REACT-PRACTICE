import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id != todoId)]);
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      } else {
        return newTodo;
      }
    });
    setTodos([...updatedTodos]);
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <TodoCreate onCreateTodo={createTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={removeTodo}
            onUpdateTodo={updateTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
