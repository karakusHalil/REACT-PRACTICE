import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slice/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    const selected = products.find((product) => product.id == id);
    if (selected) {
      dispatch(setSelectedProduct(selected));
    }
  };

  return (
    <>
      <div>{selectedProduct.title}</div>
    </>
  );
};

export default ProductDetails;
