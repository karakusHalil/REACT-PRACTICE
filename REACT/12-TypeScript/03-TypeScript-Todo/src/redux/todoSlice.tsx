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
    updateTodoById: (state, action: PayloadAction<TodoType>) => {
      state.todos = state.todos.map((todo: TodoType) =>
        todo.id !== action.payload.id ? todo : action.payload
      );
      //Daha performanslı hali altta
      // const index = state.todos.findIndex(
      //   (todo) => todo.id === action.payload.id
      // );
      // if (index !== -1) {
      //   state.todos[index] = action.payload;
      // }
    },
  },
});

export const { createTodo, removeTodoById, updateTodoById } = todoSlice.actions;

export default todoSlice.reducer;
