import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductInCategoryContext = createContext();

function ProductsInCategoryContextProvider({ children }) {
  const [CategoryToProduct, setCategoryToProduct] = useState([]);
  const [CategoryName, setCategoryName] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${CategoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryToProduct(data));
  }, [CategoryName]);

  console.log(CategoryName)

  const CategoryToProductValue = {
    CategoryToProduct,
    setCategoryToProduct,
    CategoryName,
    setCategoryName
  };

  return (
    <>
      <ProductInCategoryContext.Provider value={CategoryToProductValue}>
        {children}
      </ProductInCategoryContext.Provider>
    </>
  );
}

export { ProductInCategoryContext, ProductsInCategoryContextProvider };

ProductsInCategoryContextProvider.propTypes = {
  children: PropTypes.element,
};
