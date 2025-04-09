import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      console.log("increment", state);
      state.value++;
    },
    decrement(state) {
      console.log("decrement", state);
      state.value--;
    },
    added(state, action) {
      console.log("added", state, action);
      state.value += action.payload;
    },
    reset(state) {
      console.log(state);
      return initialState;
    },
  },
});

export const { increment, decrement, added, reset } = counterSlice.actions;
export default counterSlice.reducer;
