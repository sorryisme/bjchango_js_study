import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './constants';
  
  export function failure(error) {
    return { type: LOGIN_FAILURE, error }; 
  }
  
  export function login(playload) {
    return { type: LOGIN_REQUEST, playload };
  }
  
  export function success(playload) {
    return { type: LOGIN_SUCCESS, playload };
  }
  
  export function logout() {
    return { type: LOGOUT };
  }