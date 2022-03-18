const bcrypt = require('bcrypt');
const User = require("../models/user");


exports.updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  }


exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
          await User.findByIdAndRemove(req.params.id);
          res.status(200).json("Account has been deleted");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json("You can delete only your account!");
      }

}

exports.getUser = async (req, res) => {
try {

    const userId = req.query.userId;
    const username = req.query.username;
    const user = userId ? await User.findById(userId) : await User.findOne({username: username}); 
    const {password, updatedAt, ...others} = user._doc;
    res.status(200).json(others);
    
} catch (error) {
    console.log(error)
}

}


exports.followUser = async (req,res) => {
    if (req.body.userId !== req.params.id){
        try {
            const userToFollow = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!userToFollow.followers.includes(req.body.userId)){
                await userToFollow.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json("user has been followed");
            }
            else{
                res.status(403).json("you already follow this account");
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("you can't follow yourself")
    }

}

exports.unfollowUser = async (req, res) => {

    if (req.body.userId !== req.params.id){
        try {
            const userTounFollow = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (userTounFollow.followers.includes(req.body.userId)){
                await userTounFollow.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json("user has been followed");
            }
            else{
                res.status(403).json("you don't follow this user");
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("you can't unfollow yourself")
    }
}

exports.getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
}