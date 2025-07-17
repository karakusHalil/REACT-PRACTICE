import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, content } = todo;

  const [newTodo, setNewTodo] = useState(content);
  const [editable, setEditable] = useState(false);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
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
        <div>
          {editable ? (
            <input
              style={{
                width: "380px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "6px 8px",
                fontSize: "14px",
                outline: "none",
              }}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
            />
          ) : (
            content
          )}
        </div>
        <div>
          <IoIosRemoveCircle
            style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
            onClick={removeTodo}
          />
          {editable ? (
            <FaCheck
              style={{
                marginRight: "1px",
                fontSize: "20px",
                color: "green",
                cursor: "pointer",
              }}
              onClick={updateTodo}
            />
          ) : (
            <FaEdit
              style={{
                marginRight: "1px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => setEditable(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
