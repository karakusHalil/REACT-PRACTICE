import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log("addTodo", state, action);
      state.unshift(action.payload);
    },
  },
});
