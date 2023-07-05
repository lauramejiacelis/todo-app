import { TODOS_ACTION_TYPES } from "./actionTypes";

export const loading = () => ({
  type: TODOS_ACTION_TYPES.LOADING_TODOS,
});

export const listTodos = (todos) =>({
  type: TODOS_ACTION_TYPES.LIST_TODOS,
  payload: todos,
})

export const addTodo = (data) => ({
  type: TODOS_ACTION_TYPES.ADD_TODO,
  payload: data,
})

export const editTodo = (data) => ({
  type: TODOS_ACTION_TYPES.EDIT_TODO,
  payload: data,
})

export const deleteTodo = (id) => ({
  type: TODOS_ACTION_TYPES.DELETE_TODO,
  payload: {id},
})

export const getError = (err) => ({
  type: TODOS_ACTION_TYPES.GET_ERROR,
  payload: err,
});

