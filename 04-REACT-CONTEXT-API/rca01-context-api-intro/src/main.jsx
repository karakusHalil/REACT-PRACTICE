import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./contexts/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>
);
