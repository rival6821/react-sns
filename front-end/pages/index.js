import React from "react";
import { Input, Form, Button, Card, Icon, Avatar } from "antd";

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

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
          <Input.TextArea maxLength={140} placeholder="어떤 일이 잇었나요?" />
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
      )}
      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
