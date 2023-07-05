import { TODOS_ACTION_TYPES } from "./actionTypes";

const initialState = {
  todos: {},
  isLoading: false,
  error: null,
}

export const todosReducer = (state= initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload)
      console.log(state)
    case TODOS_ACTION_TYPES.EDIT_TODO:
      console.log('edit todo', action.payload)
      console.log(state)
      return state.map((todo)=> todo.id ===action.payload ? action.payload.id : todo )
    case TODOS_ACTION_TYPES.LIST_TODOS:
      console.log('list to do', action.payload);
      console.log(state)
      return { ...state, isLoading: false, todos: action.payload };
    case TODOS_ACTION_TYPES.GET_ERROR:
      console.log('error getting todos');
      return { ...state, isLoading: false, error: action.payload };
    case TODOS_ACTION_TYPES.LOADING_TODOS:
      console.log('is loading');
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}