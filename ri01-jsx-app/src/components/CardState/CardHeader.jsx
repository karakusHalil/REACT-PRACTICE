import PropTypes from "prop-types";
import CardButton from "../CardState/CardButton";

function CardHeader(props) {
  return (
    <>
      <h5>Card State Title</h5>
      <button onClick={props.handleClick}>Follow</button>
      <CardButton handleClick = {props.handleClick}/>
    </>
  );
}

export default CardHeader;


CardHeader.propTypes = {
  handleClick : PropTypes.onClick
};