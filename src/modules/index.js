import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modal from './modal';
import loginReducer, { loginWatcherSaga } from './systems/user_login/login';
const rootReducer = combineReducers({ loginReducer,modal });

export function* rootSaga() {
  yield all([loginWatcherSaga()]);
}

export default rootReducer;
