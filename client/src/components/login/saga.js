// import { takeLatest, all, call } from 'redux-saga/effects';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import * as RootNavigation from '../../utils/rootNavigation.js';
// import { setLoginUser } from '../../utils/loginUser';
// import { LOGIN_SUCCESS, LOGOUT, } from './constants';

// function openScreen(name) {
//   RootNavigation.navigate(name);
// }

// function* successAsync(action) {
//   setLoginUser(action.playload);
//   yield call(openScreen, '홈');
// }

// function* logoutAsync() {
//   AsyncStorage.removeItem('@admin');
//   AsyncStorage.removeItem('@token');
//   yield call(openScreen, '로그인');
// }

// function* successWatcher() {
//   yield takeLatest(LOGIN_SUCCESS, successAsync);
// }

// function* logoutWatcher() {
//   yield takeLatest(LOGOUT, logoutAsync)
// }

// export default function* Saga() {
//   yield all([
//     call(successWatcher),
//     call(logoutWatcher)
//   ]);
// }