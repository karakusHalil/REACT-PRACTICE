import { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";

function Categories() {
  const { categories } = useContext(CategoryContext);
  return (
    <>
    <h3>Kategoriler</h3>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li className="list-group-item list-group-item-action list-group-item-primary" key={index}>
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
