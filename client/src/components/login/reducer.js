
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './constants';
  
  export const initLoginState = { isLogin : false, user : {}, error : false, isRequest : false};
  
  
  export const loginReducer = (loginState = initLoginState , action) => {
    
    switch ( action.type ) {
      case LOGIN_REQUEST:
        return ({...loginState, isLogin : false, user : {}, error : false, isRequest : true})
      case LOGIN_SUCCESS:
        return ({...loginState, isLogin : true, user : action.payload, error : false, isRequest : false})     
      case LOGIN_FAILURE:
          return ({...loginState, isLogin : false, user : {}, error : true, isRequest : false})     
      case LOGOUT:
          return ({...loginState, isLogin : false, user : {}, error : false, isRequest : false})     
      default : 
          return ({...loginState})
    }

  }