import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/Todo.css";

const Todo = () => {
  return (
    <div className="todo-main">
      <div className="todo-text">Ben ilk todoyum...</div>
      <div className="todo-icons">
        <IoMdRemoveCircleOutline className="icons" />
        <FaEdit className="icons" />
      </div>
    </div>
  );
};

export default Todo;
