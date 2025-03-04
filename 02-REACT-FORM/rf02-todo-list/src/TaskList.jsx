import PropTypes from "prop-types";
import GetImportant from "./GetImportant";
import { useState } from "react";
import { useEffect } from "react";
import TaskListItem from "./TaskListItem";


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
              <TaskListItem item={item} key={index} removeTask={removeTask} editTask={editTask}/>
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
