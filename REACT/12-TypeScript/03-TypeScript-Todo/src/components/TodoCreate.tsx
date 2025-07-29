import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import type { TodoType } from "../types/Types";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("todo giriniz !");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            handleCreateTodo();
          }
        }}
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz..."
      />
      <button onClick={handleCreateTodo} className="todo-button">
        Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
