import PropTypes from "prop-types";

function GetImportant({handleTasksFilter, important}) {
  return (
    <>
      <button className={`btn btn-sm ${!important ? "btn-warning" : "btn-info"} float-end`} onClick={handleTasksFilter}>
        {!important ? "Get Importants" : "Get All Tasks"}
      </button>
    </>
  );
}

export default GetImportant;


GetImportant.propTypes = {
    handleTasksFilter : PropTypes.func,
    important : PropTypes.boolean
}