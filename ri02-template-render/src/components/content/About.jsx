import PropTypes from "prop-types"
import { useState } from "react";
import { ABOUTS } from "../../../data";
import AboutHeader from "./AboutHeader";
import AboutItem from "./AboutItem";

function About(props) {
  const [generalCount,setGeneralCount] = useState(0);
  function incrementGeneralCount(){
    setGeneralCount(generalCount + 1);
  }
  
  return (
    <>
        <AboutHeader generalCount ={generalCount}/>

      <div className="w3-row-padding w3-grayscale">
        {
          ABOUTS.map(about => <AboutItem key = {about.id} about={about} incrementGeneralCount={incrementGeneralCount} incrementGeneralCount2={props.incrementGeneralCount2}/>)
        }

      </div>
    </>
  );
}

export default About;


About.propTypes = {
  incrementGeneralCount2 : PropTypes.func
}