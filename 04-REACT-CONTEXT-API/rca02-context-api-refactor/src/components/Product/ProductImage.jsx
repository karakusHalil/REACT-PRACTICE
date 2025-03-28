import PropTypes from "prop-types";

function ProductImage({ productItem }) {
  return (
    <>
      <img
        src={productItem.image}
        className="card-img-top"
        alt={productItem.title}
        style={{ height: "25vh" }}
      />
    </>
  );
}

export default ProductImage;

ProductImage.propTypes = {
  productItem: PropTypes.object,
};
