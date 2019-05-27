import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUREST } from "../reducers/user";
import Router from "next/router";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const SignUp = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const dispatch = useDispatch();
  const { isSingingUp, me, isSignedUp } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert("로그인 했으니 메인으로 이동합니다");
      Router.push("/");
    }
  }, [me && me.id]);

  // 회원가입 완료시
  useEffect(() => {
    if (isSignedUp) {
      alert("회원가입이 완료되었습니다");
      Router.push("/");
    }
  }, [isSignedUp]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      dispatch({
        type: SIGN_UP_REQUREST,
        data: {
          userId: id,
          password,
          nickname: nick
        }
      });
    },
    [id, nick, password, passwordCheck, term]
  );

  // custom hook

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onChangePasswordCheck = useCallback(
    e => {
      let value = e.target.value;
      setPasswordError(value !== password);
      setPasswordCheck(value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    let value = e.target.value;
    setTerm(!value);
    setTermError(value);
  }, []);

  return (
    <>
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
          <Button htmlType="submit" type="primary" loading={isSingingUp}>
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};
export default SignUp;
