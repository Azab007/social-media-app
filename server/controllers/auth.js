const User = require('../models/user.js');
const bcrypt = require('bcrypt');

// exports.getAuth = (req, res) => {res.send("hello from auth")};

//register User
exports.registerUser = async(req, res) => {
    
try {
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password, salt);
    const newuser = await new User({
        ...req.body,
        password: hasedPassword
    });

    await newuser.save();
    res.status(200).json(newuser);
} catch (error) {
    res.status(500).json(error);
}
}


//Login User
exports.login = async(req, res) => {

    try {
        const user = await User.findOne({email: req.body.email});
    !user && res.status(404).json("user not found");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    !validPass && res.status(400).json("Wrong password");
    res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error);
    }
    
}

