import React from "react";
import Link from "next/link";
import UserProfile from "../components/UserProfile";
import { Menu, Input, Row, Col } from "antd";
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
          {dummy.isLoggenIn ? <UserProfile /> : <LoginForm />}
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
