const express = require("express");
const db = require("../models");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const hashTags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id
    });
    if (hashTags) {
      const result = await Promise.all(
        hashTags.map(tag =>
          db.Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() }
          })
        )
      );
      // sequelize가 자동으로 함수를 만들어 줌
      await newPost.addHashtags(result.map(r => r[0]));
    }
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{ model: db.User, attribute: ["id", "nickname"] }]
    });
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/images", (req, res) => {});

module.exports = router;
