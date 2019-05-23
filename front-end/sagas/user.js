import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  HELLO
} from "../reducers/user";

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
// 한번만 하고 사라짐 계속 반복되게 하려면 while문 적용해야함
function* watchLogin() {
  while (true) {
    yield take(LOG_IN);
    // put은 dispatch랑 동일

    yield put({
      type: LOG_IN_SUCCESS
    });
  }
}

function* helloSaga() {
  console.log("before");
  while (true) {
    yield take(HELLO);
    console.log("hello");
  }
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
