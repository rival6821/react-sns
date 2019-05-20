import React from "react";
import { Form, Input, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "테스터"
      },
      content: "테스트 게시글입니다",
      img:
        "https://steemitimages.com/DQmd6twoohmFdKcACummtqLmXD913ss18quvY7epxN8akpo/image.png"
    }
  ]
};

const PostForm = () => {
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
        {dummy.imagePaths.map((v, i) => {
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
