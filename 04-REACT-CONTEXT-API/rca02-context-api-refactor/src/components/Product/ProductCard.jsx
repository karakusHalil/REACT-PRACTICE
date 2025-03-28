import PropTypes from "prop-types";

function ProductCard({ product }) {

  return (
    <>
      <div className="p-1">
        <div className="card p-2">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0,25)}</h5>
            <p className="card-text">{product.description.substring(0,50)}...</p>
            <p className="lead">{product.price}$</p>
            <button className="btn btn-primary mt-auto w-100">Ekle</button>
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
