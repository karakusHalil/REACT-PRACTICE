import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/Todo.css";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodoById(payload));
    setEditable(false);
  };

  return (
    <div className="todo-main">
      {editable ? (
        <input
          value={newTodo}
          className="todo-checkInput"
          type="text"
          placeholder="Yeni Todo Giriniz..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      ) : (
        <div className="todo-text">{content}</div>
      )}
      <div className="todo-icons">
        <IoMdRemoveCircleOutline className="icons" onClick={handleRemoveTodo} />
        {editable ? (
          <FaCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <FaEdit className="icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
