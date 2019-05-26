export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "테스터"
      },
      id: 1,
      createdAt: "2019-01-01",
      content: "테스트 게시글입니다",
      Comments: [],
      img:
        "https://steemitimages.com/DQmd6twoohmFdKcACummtqLmXD913ss18quvY7epxN8akpo/image.png"
    }
  ], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드중
  postAdded: false, // 포스트 업로드 유무
  isAddingComment: false, // 댓글 업로드중
  addCommentErrorReason: "", // 댓글 업로드 실패 사유
  commentAdded: false // 댓글 업로드 유무
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "더미더미"
  },
  createdAt: "2019-01-01",
  content: "더미 게시글입니다",
  Comments: []
};

const dummyComment = {
  id: 1,
  User: {
    id: 2,
    nickname: "더미더미"
  },
  createdAt: new Date(),
  content: "더미댓글"
};

// 포스트 추가
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// 메인포스트 불러오기
export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

// 포스트 해시태그 불러오기
export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

// 유저 포스트 불러오기
export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

// 이미지 업로그
export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

// 종아요 버튼 누르기
export const LIKE_POSTS_REQUEST = "LIKE_POSTS_REQUEST";
export const LIKE_POSTS_SUCCESS = "LIKE_POSTS_SUCCESS";
export const LIKE_POSTS_FAILURE = "LIKE_POSTS_FAILURE";

// 싫어요 버튼 누르기
export const UNLIKE_POSTS_REQUEST = "UNLIKE_POSTS_REQUEST";
export const UNLIKE_POSTS_SUCCESS = "UNLIKE_POSTS_SUCCESS";
export const UNLIKE_POSTS_FAILURE = "UNLIKE_POSTS_FAILURE";

// 댓글 추가
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

// 댓글 불러오기
export const LOAD_COMMENT_REQUEST = "LOAD_COMMENT_REQUEST";
export const LOAD_COMMENT_SUCCESS = "LOAD_COMMENT_SUCCESS";
export const LOAD_COMMENT_FAILURE = "LOAD_COMMENT_FAILURE";

// 리트윗
export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

// 리트윗 제거
export const REMOVE_RETWEET_REQUEST = "REMOVE_RETWEET_REQUEST";
export const REMOVE_RETWEET_SUCCESS = "REMOVE_RETWEET_SUCCESS";
export const REMOVE_RETWEET_FAILURE = "REMOVE_RETWEET_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: "",
        postAdded: false
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        addPostErrorReason: action.error
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: "",
        commentAdded: false
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorReason: action.error
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
