import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  
  const productValue = {
    products: products,
    setProducts: setProducts,
  };

  return (
    <>
      <ProductContext.Provider value={productValue}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export { ProductContextProvider, ProductContext };
