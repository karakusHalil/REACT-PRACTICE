import TaskForm from "./TaskForm"

function App() {
  return (
    <>
      <div className="container bg-primary p-3">
        <h1>To-Do List</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-8 bg-danger p-3 rounded">
            <TaskForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
