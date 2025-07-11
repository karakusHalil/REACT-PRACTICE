import Header from "./Header";
import { courses } from "./Data";
import Course from "./Course";

function App() {
  return (
    <>
      <Header />
      <div
        className="course-main"
        style={{ display: "flex", flexDirection: "row", padding: "0 10px" }}
      >
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;
