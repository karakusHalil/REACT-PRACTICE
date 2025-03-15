import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2>ÜRÜNLER</h2>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        
      </div>
    </>
  );
}

export default Products;
