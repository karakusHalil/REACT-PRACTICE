import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/Todo.css";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  return (
    <div className="todo-main">
      <div className="todo-text">{content}</div>
      <div className="todo-icons" onClick={handleRemoveTodo}>
        <IoMdRemoveCircleOutline className="icons" />
        <FaEdit className="icons" />
      </div>
    </div>
  );
};

export default Todo;
