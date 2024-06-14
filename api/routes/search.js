const router = require("express").Router();
const Post = require("../models/Post");

// Search endpoint
router.get("/", async (req, res) => {
  const query = req.query.query;
  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { categories: { $regex: query, $options: "i" } }
      ]
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
