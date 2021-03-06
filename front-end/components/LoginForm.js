import React, { useCallback } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import { useInput } from "../pages/signup";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector(state => state.user);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          userId: id,
          password
        }
      });
    },
    [id, password]
  );

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
          type="password"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button htmlType="submit" type="primary" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
