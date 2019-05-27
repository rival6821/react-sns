const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  // 서버쪽에 id와 쿠키를 저장
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  //서버쪽 정보에서 꺼냄
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: {
          id
        },
        include: [
          {
            model: db.Post,
            as: "Posts",
            attribute: ["id"]
          },
          {
            model: db.User,
            as: "Followings",
            attribute: ["id"]
          },
          {
            model: db.User,
            as: "Followers",
            attribute: ["id"]
          }
        ],
        attribute: ["id", "nickname", "userId"]
      });
      return done(null, user); // req.user에 저장
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
