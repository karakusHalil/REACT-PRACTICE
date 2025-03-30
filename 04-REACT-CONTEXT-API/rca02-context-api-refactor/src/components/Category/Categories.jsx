import { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";
import { Link } from "react-router-dom";


function Categories() {
  const { categories } = useContext(CategoryContext);
  return (
    <>
      <h3>Kategoriler</h3>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            to={`/productList/category/${category}`}
            className="list-group-item list-group-item-action list-group-item-primary"
            key={index}
          >
            {category.substring(0, 1).toUpperCase() + category.substring(1)}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;
