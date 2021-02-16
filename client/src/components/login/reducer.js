
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERROR,
    LOGOUT,
  } from './constants';
  
  export const initialState = { isLogin: false, loginError: false, user: null };
  
  export function loginReducer(state = initialState, action) {
    const newState = { ...state };
  
    switch (action.type) {
      case LOGIN_REQUEST:
        break;
      case LOGIN_SUCCESS:
        newState.isLogin = true; 
        newState.loginError = false;
        newState.user = action.playload;
        break;
      case LOGIN_FAILURE:
        newState.isLogin = false;
        newState.loginError = true;
        newState.user =  null;
        break;
      case CLEAR_ERROR:
        newState.loginError = false;
        break;
      case LOGOUT:
        newState.isLogin = false;
        newState.user =  null;
        break;
      default:
        break;
    }
  
    return newState;
  }