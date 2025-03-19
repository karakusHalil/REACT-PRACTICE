import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import Categories from "./products/Categories";
import Category from "./products/Category";
import ProductList from "../pages/ProductList";

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/productlist" element={<ProductList />}>
          <Route index={true} element={<Products />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
