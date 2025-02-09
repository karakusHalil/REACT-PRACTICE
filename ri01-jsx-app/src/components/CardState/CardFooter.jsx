import PropTypes from "prop-types";

const CardFooter = (props) => {
  return (
    <>
        <button onClick={props.handleClick}>Follow</button>
        <span>Follow : {props.follow}</span>
    </>
  )
}

export default CardFooter;

CardFooter.propTypes = {
  follow : PropTypes.number,
  handleClick : PropTypes.onClick
};