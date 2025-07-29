import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/Todo.css";
import type { TodoType } from "../types/Types";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;
  return (
    <div className="todo-main">
      <div className="todo-text">{content}</div>
      <div className="todo-icons">
        <IoMdRemoveCircleOutline className="icons" />
        <FaEdit className="icons" />
      </div>
    </div>
  );
};

export default Todo;
