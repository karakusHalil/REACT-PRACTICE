import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/products/ProductCard";

function Products({ setFavorites, favorites }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2>ÜRÜNLER</h2>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} setFavorites={setFavorites} favorites={favorites}/>
        ))}
      </div>
    </>
  );
}

export default Products;

Products.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};
