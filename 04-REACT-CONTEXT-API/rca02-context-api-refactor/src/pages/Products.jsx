import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CategoryContext } from "../contexts/CategoryContext";
import Categories from "../components/Category/Categories";

function Products() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item" key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
        <Categories/>
    </>
  );
}

export default Products;
