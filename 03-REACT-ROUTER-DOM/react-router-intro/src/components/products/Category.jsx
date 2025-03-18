import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category() {
  const { categoryName } = useParams();
  const [productsInCategory, setProductsInCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProductsInCategory(data));
  }, [categoryName]);
  return (
    <>
      <h2>{categoryName.substring(0, 1).toUpperCase() + categoryName.substring(1)}</h2>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        {productsInCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Category;
