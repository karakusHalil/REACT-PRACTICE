import PropTypes from "prop-types";

function ProductCard({ product }) {
  return (
    <>
      <div className="p-1">
        <div className="card p-1">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description.substring(0, 100)}...
            </p>
            <p className="lead">{product.price}$</p>
            <a href="#" className="btn btn-primary">
              Product Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
