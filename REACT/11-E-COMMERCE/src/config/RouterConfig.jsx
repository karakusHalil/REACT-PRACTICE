import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default RouterConfig;
