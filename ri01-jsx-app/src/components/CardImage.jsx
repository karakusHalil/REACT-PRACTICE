import PropTypes from "prop-types";

const CardImage = (props) => {
  return (
    <img
      style={{ maxWidth: "100%" }}
      src={props.cardPicture}
      className="card-img-top"
      alt="..."
    />
  );
};

export default CardImage;

CardImage.propTypes = {
  cardPicture: PropTypes.element,
};
