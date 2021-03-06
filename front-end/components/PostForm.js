import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { imagePaths, isAddingPost, postAdded } = useSelector(
    state => state.post
  );

  useEffect(() => {
    setText("");
  }, [postAdded === true]);

  const onSubmitForm = useCallback(
    e => {
      if (!text || !text.trim()) {
        return alert("내용을 입력해주세요");
      }
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          content: text
        }
      });
    },
    [text]
  );

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <Form
      encType="multipart/form-data"
      style={{ margin: "10px 0 20px" }}
      onSubmit={onSubmitForm}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 일이 잇었나요?"
        style={{ resize: "none" }}
        value={text}
        onChange={onChangeText}
      />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          loading={isAddingPost}
        >
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => {
          return (
            <div key={i} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
