import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CardContextProvider } from "./context/CardContext.jsx";
import { ColorContextProvider } from "./context/ColorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorContextProvider>
      <CardContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CardContextProvider>
    </ColorContextProvider>
  </StrictMode>
);
