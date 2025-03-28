import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <div className="p-1">
        <div className="card p-1 " style={{ height: "500px" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0, 25)}</h5>
            <p className="card-text">
              {product.description.substring(0, 50)}...
            </p>
            <p className="lead">{product.price}$</p>
            <Link
              to={`productdetails/${product.id}`}
              className="btn btn-primary mt-auto w-100"
              style={{
                position: "absolute",
                bottom: "0px",
                left: "1px",
                right: "1px",
              }}
            >
              Sepete Ekle
            </Link>
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
