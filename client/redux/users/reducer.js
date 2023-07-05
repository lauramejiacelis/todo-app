import { USER_ACTION_TYPES } from './actionTypes'

const initialState = {
  loading: false,
  currentUser: null,
  error: null
}

const userReducer = (state = initialState, action)=>{
  switch (action.type){
    case USER_ACTION_TYPES.LOADING:
      console.log('...loading')
      return {
        ...state,
        loading:true
      }
    case USER_ACTION_TYPES.REGISTER_SUCCESS:
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      console.log(state)
      console.log('register success')
      console.log(action.payload)
      return {
        ...state,
        loading:false,
        currentUser: action.payload,
      }
    case USER_ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload
      }
    case USER_ACTION_TYPES.REGISTER_ERROR:
    case USER_ACTION_TYPES.LOGIN_ERROR:
    case USER_ACTION_TYPES.LOGOUT_ERROR:
      console.log('error!!!')
      return {
        ...state,
        loading:false,
        error: action.payload,
      }
    default:
      return state;
  }
}


export default userReducer;