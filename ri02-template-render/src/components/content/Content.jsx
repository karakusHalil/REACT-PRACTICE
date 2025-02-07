import About from "./About";
import Contact from "./Contact";
import Location from "./Location";
import ProjectList from "./ProjectList";

function Content() {
  return (
    <>
      <div className="w3-content w3-padding" style={{maxWidth: "1564px"}}>
        <ProjectList />
        <About />
        <Contact />
        <Location />
      </div>
    </>
  );
}

export default Content;
