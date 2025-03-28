import { CategoryContextProvider } from "./contexts/CategoryContext";
import { ProductContextProvider } from "./contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductItemContextProvider } from "./contexts/ProductItemContext";

createRoot(document.getElementById("root")).render(
  <>
    <ProductItemContextProvider>
      <CategoryContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductContextProvider>
      </CategoryContextProvider>
    </ProductItemContextProvider>
  </>
);
