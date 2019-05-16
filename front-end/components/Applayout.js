import React from "react";
import { Menu, Input } from "antd";

const Applayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">후니보드</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default Applayout;
