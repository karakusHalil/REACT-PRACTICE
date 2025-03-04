import PropTypes from "prop-types";
import GetImportant from "./GetImportant";
import { useState } from "react";
import { useEffect } from "react";


function TaskList({ tasks, removeTask, editTask }) {
  
  const [important,setImportant] = useState(false);
  const [filteredTasks,setFilteredTasks] = useState(tasks);

  function handleTasksFilter(){
    const newImportant = !important;
    newImportant ? setFilteredTasks(tasks.filter(item => item.important === true)) : setFilteredTasks(tasks)
    setImportant(newImportant);
  }

  useEffect(()=>{
    setFilteredTasks(tasks);
  },[tasks])
  
  if (tasks.length === 0) {
    return <></>;
  }
  return (
    <>
      <div>
        <h4 className="mt-5">Task List <GetImportant handleTasksFilter={handleTasksFilter} important={important}/></h4>
        
        <ul className="list-group mt-3 w100">
          {filteredTasks.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {item.task}{" "}
              {item.important ? (
                <span className="badge text-bg-success">Important</span>
              ) : (
                <span className="badge text-bg-danger">Not Important</span>
              )}
              <div
                className="btn-group float-end"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => editTask(item.id)}
                >
                  UPDATE
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => removeTask(item.id)}
                >
                  DELETE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  editTask: PropTypes.func,
};
