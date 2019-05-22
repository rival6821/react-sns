import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  HELLO
} from "../reducers/user";

function* loginAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* helloSage() {
  console.log("before");
  while (true) {
    yield take(HELLO);
    console.log("hello");
  }
}

export default function* userSage() {
  //yield all([fork(watchLogin)]);
  yield helloSage();
}
