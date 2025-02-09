import { useState } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CardState() {
  const styles = {
    cardStyle: {
      width: "18rem",
      border: "1px solid silver",
      borderRadiues: "3px",
      padding: "3px",
      boxSizing: "border-box",
    },
    buttonStyle: {
      display: "block",
      padding: "5px",
      border: "2px solid silver",
      backgroundColor: "silver",
      borderRadiues: "3px",
      width: "90%",
      margin: "0px auto",
      textDecoration: "none",
      textAlign: "center",
    },
  };
  const [follow,setFollow] = useState(0);
  function handleClick(){
    setFollow(follow +1);
  };
  return (
    <>
      <div style={styles.cardStyle}>
        <CardHeader handleClick = {handleClick}/>
        <div>
          <p>description</p>
          <span>Follow : {follow}</span>
          <a href="#" style={styles.buttonStyle} onClick={handleClick}>
            Go somewhere
          </a>
        </div>
        <CardFooter follow = {follow} handleClick = {handleClick}/>
      </div>
    </>
  );
}
