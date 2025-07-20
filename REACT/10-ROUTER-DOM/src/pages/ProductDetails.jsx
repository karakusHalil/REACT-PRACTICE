import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data/productData";
import Products from "../components/Products";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1>Ürün Detayları</h1>
        <hr />
        {productData &&
          productData.map((product) => {
            if (product.id == id) {
              return <Products product={product} />;
            }
          })}
      </div>
    </>
  );
};

export default ProductDetails;
