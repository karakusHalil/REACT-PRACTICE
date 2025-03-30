import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductInCategoryContext } from "../../contexts/ProductInCategoryContext";
import ProductCard from "../Product/ProductCard";

function Category() {
  const { CategoryName } = useParams();
  const { CategoryToProduct, setCategoryName } = useContext(
    ProductInCategoryContext
  );
  console.log(CategoryName);
  useEffect(() => {
    setCategoryName(CategoryName);
  }, [CategoryName, setCategoryName]);
  return (
    <>
      <h2>
        {CategoryName.substring(0, 1).toUpperCase() + CategoryName.substring(1)}
      </h2>
      <div className="row row-cols-sm-1 row-cols-2 row-cols-md-4 row-cols-lg-5">
        {CategoryToProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Category;
