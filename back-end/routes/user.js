const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {});

// 회원가입
router.post("/", async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // salt는 10~12
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러처리를 여기서
    return next(e);
  }
});

router.get("/:id", (req, res) => {});
router.post("/logout", (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send("logout 성공");
});

// 로그인
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(err, user, info);
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = Object.assign({}, user.toJSON());
      delete filteredUser.password;
      return res.json(filteredUser);
    });
  })(req, res, next);
});

router.get("/:id/follow", (req, res) => {});
router.post("/:id/follow", (req, res) => {});
router.delete("/:id/follow", (req, res) => {});
router.delete("/:id/follower", (req, res) => {});
router.get("/:id/posts", (req, res) => {});

module.exports = router;
