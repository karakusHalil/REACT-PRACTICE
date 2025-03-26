import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Products() {
  const { products } = useContext(ProductContext);
  
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Products;
