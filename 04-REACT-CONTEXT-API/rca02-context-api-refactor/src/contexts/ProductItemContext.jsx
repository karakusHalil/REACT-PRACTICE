// import { Children, createContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

// const ProductItemContext = createContext();

// function ProductItemContextProvider({ children }) {
//   const { productId } = useParams();
//   const [productItem, setProductItem] = useState([]);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProductItem(data));
//   }, [productId]);

//   const productItemValue = {
//     productItem,
//     setProductItem,
//   };
//   return (
//     <>
//       <ProductItemContext.Provider value={productItemValue}>
//         {children}
//       </ProductItemContext.Provider>
//     </>
//   );
// }

// export { ProductItemContext, ProductItemContextProvider };

// ProductItemContextProvider.propTypes = {
//   children: PropTypes.element,
// };
