import {
  all,
  fork,
  takeLatest,
  put,
  takeEvery,
  call
} from "redux-saga/effects";
// fork : 함수실행, 비동기, 순서 필요없음
// call : 함수실행, 동기, 응답을 받고 진행

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
} from "../reducers/user";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3065/api";

// 로그인
// LOG_IN액션이 실행되면 LOG_IN_SUCCESS액션이 자동으로 실행된다.
// 한번만 하고 사라짐 계속 반복되게 하려면 while문 적용해야함 or takeEvery, takeLatest
// takeEvery 는 누적O
// takeLatest 는 누적x, 이전꺼가 안끈나면 이전거 취소
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logInAPI(logInData) {
  return axios.post(`/user/login`, logInData, {
    withCredentials: true
  });
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e
    });
  }
}

// 회원가입
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function singUpAPI(signUpData) {
  return axios.post("/user", signUpData);
}

function* signUp(action) {
  try {
    yield call(singUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

// 로그아웃
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function logOutAPI() {
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}

// 사용자 정보 가져오기
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function loadUserAPI() {
  return axios.get("/user/", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp)
  ]);
}
