import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Categories from "../components/Category/Categories";
import ProductCard from "../components/Product/ProductCard";

function Products() {
  const { products } = useContext(ProductContext);
  
  return (
    <>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        {
          products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  );
}

export default Products;
