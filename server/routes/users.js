const router = require('express').Router();
const { updateUser, deleteUser, getUser, followUser, unfollowUser, getFriends} = require('../controllers/users.js')

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/", getUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);
router.get("/friends/:userId", getFriends)

module.exports = router;