const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/:tag", async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.Hashtag,
          where: {
            name: decodeURIComponent(req.params.tag)
          }
        }
      ]
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/images", (req, res) => {});

module.exports = router;
