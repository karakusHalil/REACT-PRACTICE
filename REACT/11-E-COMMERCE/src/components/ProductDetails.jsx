import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slice/productSlice";
import "../css/ProductDetails.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { addToBasket } from "../redux/slice/basketSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const { price, title, image, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (!products || products.length === 0) {
      getProductByIdAxios();
    } else {
      getProductById();
    }
  }, [id]);

  const getProductById = () => {
    const selected = products.find((product) => product.id == id);
    if (selected) {
      dispatch(setSelectedProduct(selected));
    }
  };

  const getProductByIdAxios = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = response.data;
      dispatch(setSelectedProduct(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };

    dispatch(addToBasket(payload));
    setCount(1);
  };

  return (
    <>
      <div className="product-detail">
        <img className="product-image" src={image} alt={title} />

        <div className="product-info">
          <h1 className="product-title">{title}</h1>
          <p className="product-description">{description}</p>
          <h1 className="product-price">{price}</h1>
          <div className="counter">
            <AiOutlineMinusSquare onClick={decrement} />
            <span>{count}</span>
            <AiOutlinePlusSquare onClick={increment} />
          </div>
          <div className="basket">
            <button onClick={addBasket}>Sepete Ekle</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
