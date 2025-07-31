import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];

      //state.todos.push(action.payload) typescriptte daha kullanışlı yeni array oluşturmaz
    },
    removeTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = state.todos.filter(
        (todo: TodoType) => todo.id !== action.payload
      );
    },
  },
});

export const { createTodo, removeTodoById } = todoSlice.actions;

export default todoSlice.reducer;
