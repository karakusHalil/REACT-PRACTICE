import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import ProductsList from "./Product/ProductsList";
import Category from "./Category/Category";


function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index={true} element={<ProductsList />} />
          <Route path="/productList/category/:CategoryName" element={<Category />} />
          <Route path="productList/category/:CategoryName/productdetails/:productId" element={<ProductDetails />}/>
        </Route>

        <Route path="/products" element={<Products />}>
          <Route index={true} element={<ProductsList />} />
          <Route
            path="productdetails/:productId"
            element={<ProductDetails />}
          />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
