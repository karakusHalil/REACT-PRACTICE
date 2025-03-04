import PropTypes from "prop-types";

function TaskListItem({ editTask, removeTask, item }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
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
    </>
  );
}

export default TaskListItem;

TaskListItem.propTypes = {
  editTask: PropTypes.func,
  removeTask: PropTypes.func,
  item: PropTypes.object,
  
};
