import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
  ]
};

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return (
    <div>
      {isLoggedIn ? <div>{user.nickname}</div> : <></>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
