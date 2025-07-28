import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
