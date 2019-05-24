const dummyUser = {
  nickname: "일훈이",
  Post: [],
  followings: [],
  followers: []
};

export const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "", // 로그인 에서 사유
  signedUp: false, // 회원가입 성공
  isSingingUp: false, // 회원가입 시도중
  signUpErrorReason: "", // 회원가입 실패 사유
  me: null, // 유저 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null // 남의 정보
};

// 로그인
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// 로그아웃
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

// 유저 정보 불러오기
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

// 회원가입
export const SIGN_UP_REQUREST = "SIGN_UP_REQUREST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// 유저 팔로우 불러오기
export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

// 유저 팔로우 하기
export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

// 유저 언팔로우 하기
export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

// 팔로워 없애기
export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

//
export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

export const loginAction = {
  type: LOG_IN_REQUEST,
  data: dummyUser
};

export const logoutAction = {
  type: LOG_OUT_REQUEST
};

export const signUpAction = data => {
  return {
    type: SIGN_UP_REQUREST,
    data: data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        me: dummyUser,
        isLoggedIn: true
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        me: null
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        me: null
      };
    }
    case SIGN_UP_REQUREST: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
