import PropTypes from "prop-types";

function TaskList({tasks}) {
  return (
    <>
        <ul className="list-group mt-5">
        {tasks.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item.task}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList

TaskList.propTypes = {
    tasks : PropTypes.array
}