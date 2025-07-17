import { useState } from "react";
import "../App.css";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    };
    onCreateTodo(request);
    setNewTodo("");
  };
  return (
    <>
      <div className="todo-create">
        <input
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="ToDo Giriniz"
        />
        <button onClick={createTodo}>ToDo Oluştur</button>
      </div>
    </>
  );
};

export default TodoCreate;
