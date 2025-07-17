import "../App.css";

const TodoCreate = () => {
  return (
    <>
      <div className="todo-create">
        <input type="text" placeholder="ToDo Giriniz" />
        <button>ToDo Oluşturuldu</button>
      </div>
    </>
  );
};

export default TodoCreate;
