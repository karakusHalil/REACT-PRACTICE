import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import productReducer from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
  },
});
