import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './constants';
  
  export function failure() {
    return { type: LOGIN_FAILURE }; 
  }
  
  export function login(payload) {
    return { type: LOGIN_REQUEST, payload };
  }
  
  export function success(payload) {
    return { type: LOGIN_SUCCESS, payload };
  }
  
  export function logout() {
    return { type: LOGOUT };
  }