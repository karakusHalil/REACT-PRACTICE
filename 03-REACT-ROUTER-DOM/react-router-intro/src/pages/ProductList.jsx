import { Outlet } from "react-router-dom";
import Categories from "../components/products/Categories";
import Products from "./Products";
import PropTypes from "prop-types";

function ProductList({ setFavorites, favorites }) {
  return (
    <>
      <div className="row justify-content-between" style={{ width: "100%" }}>
        <div className="col-sm-12 col-md-9">
          <Outlet setFavorites={setFavorites} favorites={favorites} />
        </div>
        <div className="col-sm-12 col-md-3">
          <Categories />
        </div>
      </div>
    </>
  );
}

export default ProductList;

ProductList.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
};
