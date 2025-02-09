import PropTypes from "prop-types";

function CardButton(props) {
  return (
    <>
        <h3>Card Button</h3>
        <button onClick={props.handleClick}>Follow cardButton</button>
    </>
  )
}

export default CardButton

CardButton.propTypes = {
    handleClick : PropTypes.onClick
};