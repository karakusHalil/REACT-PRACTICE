import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};
const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        findProduct.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }
      writeFromBasketToStorage(state.products);
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasket: (state) => {
      const total = state.products?.reduce((sum, product) => {
        return sum + product.price * product.count;
      }, 0);
      state.totalAmount = total.toFixed(2);
    },
  },
});

export const { addToBasket, setDrawer, calculateBasket } = basketSlice.actions;

export default basketSlice.reducer;
