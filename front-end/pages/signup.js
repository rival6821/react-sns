import React, { useState } from "react";
import Applayout from "../components/Applayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";

const SignUp = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };

  // custom hook
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = e => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onChangePasswordCheck = e => {
    let value = e.target.value;
    setPasswordError(value !== password);
    setPasswordCheck(value);
  };

  const onChangeTerm = e => {
    let value = e.target.value;
    setTerm(!value);
    setTermError(value);
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
            <Input name="user-id" required onChange={onChangeId} value={id} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              required
              onChange={onChangeNick}
              value={nick}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              required
              onChange={onChangePassword}
              value={password}
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
              value={passwordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" onChange={onChangeTerm} value={term}>
              약관에 동의합니다
            </Checkbox>
            {termError && (
              <div style={{ color: "red" }}>약관에 동의하셔야 합니다</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
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
