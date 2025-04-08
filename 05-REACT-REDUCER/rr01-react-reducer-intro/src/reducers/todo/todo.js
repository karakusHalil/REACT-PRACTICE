import { ADD_TODO, REMOVE_TODO, RESET } from "./actionTypes";



const initialTodo = {
    todos : []
};


const todoReducer = (state, action) => {
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,todos : [
                    ...state.todos,{id : 1, title : action.payload}
                ]
            };
        default:
            return initialTodo;
    }
}