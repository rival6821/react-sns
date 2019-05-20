import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
    <Form encType="multipart/form-data" style={{ margin: "10px 0 20px" }}>
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 일이 잇었나요?"
        style={{ resize: "none" }}
      />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
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
