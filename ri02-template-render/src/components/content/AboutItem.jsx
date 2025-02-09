import PropTypes, { func } from "prop-types"
import { useState } from "react";

function AboutItem(props) {
  const [count,setCount] = useState(1);
  function handleCountButton(){
    setCount(count + 1);
  }
  return (
    <>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img
          src={props.about.imgSrc}
          alt={props.about.firstname}
          style={{ width: "100%" }}
        />
        <h3>{props.about.firstname} {props.about.lastname}</h3>
        <span>Count : {count}</span>
        <p className="w3-opacity">{props.about.statu}</p>
        <p>
          {props.about.description}
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block" onClick={handleCountButton}>Contact</button>
        </p>
      </div>
    </>
  );
}

export default AboutItem;

AboutItem.propTypes = {
    about : PropTypes.object
}