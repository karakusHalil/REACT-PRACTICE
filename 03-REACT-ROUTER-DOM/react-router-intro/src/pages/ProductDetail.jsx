import { useEffect, useState } from "react";
import ProductImage from "../components/products/ProductImage";
import ProductInfo from "../components/products/ProductInfo";

function ProductDetail() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="row mt-3">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
    </>
  );
}

export default ProductDetail;
