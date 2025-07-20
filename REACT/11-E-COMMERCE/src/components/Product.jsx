import React from "react";
import "../css/Product.css";

const Product = ({ product }) => {
  const { id, price, image, title, description } = product;
  return (
    <>
      <div className="card">
        <img className="image" src={image} alt={title} />
        <div>
          <p>{title}</p>
          <h3>{price} ₺</h3>
        </div>
        <div>
          <button>Detayına Git</button>
        </div>
      </div>
    </>
  );
};

export default Product;
