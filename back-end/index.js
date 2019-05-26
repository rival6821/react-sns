const express = require("express");
const db = require("./models");
const userAPIRouter = require("./routes/user");
const postsAPIRouter = require("./routes/posts");
const postAPIRouter = require("./routes/post");
const app = express();

db.sequelize.sync();

// body form 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userAPIRouter);
app.use("/api/posts", postsAPIRouter);
app.use("/api/post", postAPIRouter);

app.listen(3065, () => {
  console.log(`server is running on http://localhost:3065`);
});
