import { ADD_TODO, REMOVE_TODO, RESET } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const initialTodo = {
  todos: [],
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: uuidv4(), title: action.payload }],
      };
    case REMOVE_TODO:
        {
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {...state,todos : filteredTodos}
        }
    case RESET:
        return initialTodo;
    default:
      return state;
  }
};
