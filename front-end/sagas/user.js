import {
  all,
  fork,
  takeLatest,
  call,
  put,
  take,
  takeEvery
} from "redux-saga/effects";
// fork : 함수실행, 비동기, 순서 필요없음
// call : 함수실행, 동기, 응답을 받고 진행

import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  HELLO,
  SIGN_UP_REQUREST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";

import axios from "axios";

function* loginAPI() {
  // 서버에 요청을 보내는 부분
}

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

// LOG_IN액션이 실행되면 LOG_IN_SUCCESS액션이 자동으로 실행된다.
// 한번만 하고 사라짐 계속 반복되게 하려면 while문 적용해야함 or takeEvery, takeLatest
// takeEvery 는 누적O
// takeLatest 는 누적x, 이전꺼가 안끈나면 이전거 취소
function* watchLogin() {
  yield takeLatest(LOG_IN, loginSuccess);
}

function* loginSuccess() {
  yield put({
    type: LOG_IN_SUCCESS
  });
}

function* helloSaga() {
  console.log("before");
  while (true) {
    yield take(HELLO);
    console.log("hello");
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUREST, signUp);
}

function singUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post("/login");
}

function* signUp() {
  try {
    yield call(singUpAPI);
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE
    });
  }
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
