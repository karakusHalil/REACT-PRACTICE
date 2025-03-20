import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Favorites from "../../pages/Favorites";

function ProductCard({ product, setFavorites, favorites }) {
  const addFavorite = (item) => {
    setFavorites(
      favorites.some((fav) => fav.id === item.id)
        ? favorites
        : [...favorites, item]
    );
  };

  return (
    <>
      <div className="p-1">
        <div className="card p-1">
          <Link to={`/productlist/product/${product.id}`}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "25vh" }}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0, 25)}</h5>
            <p className="card-text">
              {product.description.substring(0, 80)}...
            </p>
            <p className="lead">{product.price}$</p>
            <button
              className="btn btn-primary"
              onClick={() => addFavorite(product)}
            >
              Favorilere Ekle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
};
