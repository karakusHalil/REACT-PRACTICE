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

        <div className="row border mt-3 p-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
