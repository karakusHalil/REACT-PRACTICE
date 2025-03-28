import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
