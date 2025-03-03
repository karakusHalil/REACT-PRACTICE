import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

function TaskForm() {
  const emptyForm = { task: "", important: false };
  const [formData, setFormData] = useState(emptyForm);
  const [tasks, setTasks] = useState([]);

  function removeTask(id) {
    console.log(id);
    setTasks((prev) => prev.filter((task) => task.id != id));
  }

  function editTask(id) {
    const task = tasks.find((item) => item.id === id);
    setFormData({ ...task });
    // console.log(task)
  }

  function handleInputChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });

    // console.log(formData)

    // e.target.type === "checkbox"
    //   ? console.log(e.target.checked)
    //   : console.log(e.target.value);
  }

  function handleButtonSubmit(e) {
    e.preventDefault();

    if (formData.id) {
      // console.log(formData.id)
      const newTasks = tasks.map((task) => {
        if (task.id === formData.id) {
          return {
            id: formData.id,
            task: formData.task,
            import: formData.important,
          };
        }
        return task;
      });
      setTasks(newTasks);
    } else if (formData.task.length >= 3) {
      formData.id = uuidv4();
      setTasks((prev) => [formData, ...prev]);
    }
    setFormData(emptyForm);
    e.target.reset();
    // console.log(tasks);
    //  console.log(formData)
  }

  return (
    <>
      <form onSubmit={handleButtonSubmit}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="task"
              name="task"
              value={formData.task}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="important"
                name="important"
                checked={formData.important}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Important
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Save
        </button>
      </form>
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </>
  );
}

export default TaskForm;
