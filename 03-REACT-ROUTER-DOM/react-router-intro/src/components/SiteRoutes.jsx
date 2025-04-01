import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import Categories from "./products/Categories";
import Category from "./products/Category";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";
import Favorites from "../pages/Favorites";

function SiteRoutes({ handleLogin, favorites, setFavorites }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setFavorites={setFavorites} favorites={favorites}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products setFavorites={setFavorites} favorites={favorites}/>} />

        <Route path="/productlist" element={<ProductList setFavorites={setFavorites} favorites={favorites}/>}>
          <Route index={true} element={<Products setFavorites={setFavorites} favorites={favorites}/>} />
          <Route path="category/:categoryName" element={<Category setFavorites={setFavorites} favorites={favorites}/>} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default SiteRoutes;

SiteRoutes.propTypes = {
  handleLogin: PropTypes.func,
  favorites : PropTypes.array,
  setFavorites : PropTypes.func
};
