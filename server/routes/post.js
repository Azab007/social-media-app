const router = require('express').Router();
const {createPost, updatePost, deletePost, likePost, getPost, getTimeline, getProfile} = require('../controllers/post.js');

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost)
router.put("/:id/like", likePost);
router.get("/:id", getPost);
router.get("/timeline/:userId", getTimeline);
router.get("/profile/:username", getProfile);

module.exports = router;