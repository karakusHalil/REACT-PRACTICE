import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

const ProductItemContext = createContext();

function ProductItemContextProvider({ children }) {
  const [productItem, setProductItem] = useState({});
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductItem(data));
  }, [productId]);


  const productItemValue = {
    productItem,
    setProductItem,
    productId,
    setProductId,
  };
  return (
    <>
      <ProductItemContext.Provider value={productItemValue}>
        {children}
      </ProductItemContext.Provider>
    </>
  );
}

export { ProductItemContext, ProductItemContextProvider };

ProductItemContextProvider.propTypes = {
  children: PropTypes.element,
};
