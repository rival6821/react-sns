import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col, Card, Avatar } from "antd";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";

const dummy = {
  nickname: "일훈이",
  Post: [],
  followings: [],
  followers: [],
  isLoggenIn: false
};

const Applayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>후니보드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search style={{ verticalAlign: "middle" }} enterButton />
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggenIn ? (
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
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          세번째
        </Col>
      </Row>
    </div>
  );
};

Applayout.propTypes = {
  children: PropTypes.node
};

export default Applayout;
