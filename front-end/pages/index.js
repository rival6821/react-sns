import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { HELLO } from "../reducers/user";

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: HELLO
    });
  }, []);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
