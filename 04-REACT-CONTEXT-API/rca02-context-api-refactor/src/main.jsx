import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./contexts/ProductContext";

createRoot(document.getElementById("root")).render(
  <>
    <ProductContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContextProvider>
  </>
);
