import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Todo = ({ todo, onRemoveTodo }) => {
  const { id, content } = todo;

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid lightgray",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <div>{content}</div>
        <div>
          <IoIosRemoveCircle
            style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
            onClick={removeTodo}
          />
          <FaEdit
            style={{ marginRight: "1px", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
