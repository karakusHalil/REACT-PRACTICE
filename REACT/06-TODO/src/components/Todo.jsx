import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
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
        }}
      >
        <div>Ben ilk Todoyum</div>
        <div>
          <IoIosRemoveCircle
            style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
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
