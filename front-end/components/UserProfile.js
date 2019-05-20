import React from "react";
import { Card, Avatar } from "antd";

const dummy = {
  nickname: "일훈이",
  Post: [],
  followings: [],
  followers: [],
  isLoggenIn: false
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummy.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {dummy.followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {dummy.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;
