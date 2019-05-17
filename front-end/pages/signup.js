import React, { useState } from "react";
import Applayout from "../components/Applayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";

const SignUp = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = e => {
    setTerm(!e.target.value);
  };

  return (
    <>
      <Head>
        <title>후니보드</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <Applayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-pass-chk">비밀번호확인</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          <div>
            <Checkbox name="user-term" onChange={onChangeTerm} value={term}>
              약관에 동의합니다
            </Checkbox>
          </div>
          <div>
            <Button htmlType="submit" type="primary">
              가입하기
            </Button>
          </div>
        </Form>
      </Applayout>
    </>
  );
};
export default SignUp;
