const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");

const db = require("./models");
const userAPIRouter = require("./routes/user");
const postsAPIRouter = require("./routes/posts");
const postAPIRouter = require("./routes/post");

dotenv.config();
const app = express();
db.sequelize.sync();

app.use(morgan("dev"));
// body form 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false // https쓸때 true로
    }
  })
);

app.use("/api/user", userAPIRouter);
app.use("/api/posts", postsAPIRouter);
app.use("/api/post", postAPIRouter);

app.listen(3065, () => {
  console.log(`server is running on http://localhost:3065`);
});
