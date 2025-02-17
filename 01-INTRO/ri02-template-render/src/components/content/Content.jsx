import PropTypes from "prop-types";
import About from "./About";
import Contact from "./Contact";
import Location from "./Location";
import ProjectList from "./ProjectList";

function Content(props) {
  
  return (
    <>
      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        <ProjectList />
        <About
          generalCount2={props.generalCount2}
          setGeneralCount2={props.setGeneralCount2}
          incrementGeneralCount2={props.incrementGeneralCount2}
        />
        <Contact />
        <Location />
      </div>
    </>
  );
}

export default Content;

Content.propTypes = {
  generalCount2: PropTypes.number,
  setGeneralCount2: PropTypes.func,
  incrementGeneralCount2: PropTypes.func,
}
