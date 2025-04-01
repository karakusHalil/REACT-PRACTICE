import Categories from "../components/products/Categories";
import Products from "./Products";
import PropTypes from "prop-types";

function Home({ setFavorites, favorites }) {
  return (
    <>
      <div className="row justify-content-between" style={{ width: "100%" }}>
        <div className="col-sm-12 col-md-3">
          <Categories />
        </div>
        <div className="col-sm-12 col-md-9">
        <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
          <Products setFavorites={setFavorites} favorites={favorites}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;

Home.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
};
