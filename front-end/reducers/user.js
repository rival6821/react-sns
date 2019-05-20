const dummyUser = {
  nickname: "일훈이",
  Post: [],
  followings: [],
  followers: []
};

export const initialState = {
  isLoggedIn: false,
  user: null
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginAction = {
  type: LOG_IN,
  data: dummyUser
};

export const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
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
