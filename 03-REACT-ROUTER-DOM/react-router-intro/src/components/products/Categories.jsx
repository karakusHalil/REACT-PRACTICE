import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <h3>Kategoriler</h3>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            to="/"
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
