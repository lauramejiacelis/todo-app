import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { todosReducer } from './todos';
import { userReducer } from './users'

// middleware
const middleware = [thunk];

//reducer
const reducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
})

// creating store
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);