import PropTypes from "prop-types";

function ProductImage({ productItem }) {
  return (
    <>
      <div className="col-4 border p-2 w-100">
        <img
          src={productItem.image}
          className="card-img-top"
          alt={productItem.title}
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default ProductImage;

ProductImage.propTypes = {
  productItem: PropTypes.object,
};
