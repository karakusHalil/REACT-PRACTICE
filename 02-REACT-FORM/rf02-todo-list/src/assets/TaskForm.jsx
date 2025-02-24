import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TaskForm() {
  const emptyForm = { task: "", important: false };
  const [formData, setFormData] = useState(emptyForm);
  const [tasks, setTasks] = useState([]);

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

    if (formData.task.length >= 3) {
      formData.id = uuidv4();
      setTasks((prev) => [...prev, formData]);
      setFormData(emptyForm);
      e.target.reset();
    }
    console.log(tasks);
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
    </>
  );
}

export default TaskForm;
