import { createContext, useState } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const productList = [
    {
      id: 1,
      name: "Toshiba Laptop",
      price: 19000,
      stock: 19,
      category: "Bilgisayar",
    },
    {
      id: 2,
      name: "HP Laptop",
      price: 17000,
      stock: 17,
      category: "Bilgisayar",
    },
    {
      id: 3,
      name: "Casper Laptop",
      price: 13000,
      stock: 13,
      category: "Bilgisayar",
    },
    {
      id: 4,
      name: "Lenova Laptop",
      price: 14000,
      stock: 14,
      category: "Bilgisayar",
    },
    {
      id: 5,
      name: "Iphone 15",
      price: 15000,
      stock: 15,
      category: "Cep Telefon",
    },
    {
      id: 6,
      name: "Samsung S20",
      price: 16000,
      stock: 16,
      category: "Cep Telefonu",
    },
  ];
  const [products, setProducts] = useState(productList);
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
