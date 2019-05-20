export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "테스터"
      },
      createdAt: "2019-01-01",
      content: "테스트 게시글입니다",
      img:
        "https://steemitimages.com/DQmd6twoohmFdKcACummtqLmXD913ss18quvY7epxN8akpo/image.png"
    }
  ],
  imagePaths: []
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: "1",
    User: {
      nickname: "후니"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
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
