// It needs a way to be locked and email recovery to unlock it 
// After 3 attempts, it should say lock
// Automatically alert user of bad attempts
// Apply boolean option of lock
// Require email reset
//Or text your phone

const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressJwt = require('express-jwt')
const User = require("../models/user");


exports.signup = async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if(userExists) 
    return res.status(403).json({
        error: "Sorry, that email is taken..."
    })
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({message: "Signup Successful! Please login"});
};

exports.signin = (req, res) => {

    //find the user based on email


const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
    //if  no user or error 
        if (!user || err ) {  
                return res.status(401).json({
                        error: "User with the email entered does not exist.  Please signup!"
                                            });
                            } 
        if(!user.authenticate(password)) { // If user exists, but the passowrd is wrong
                return res.status(401).json({
                        error: "User with the email entered does not exist or does not match.  Please signup!"
});
}



    // generate a token user id and secret
const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and token to frontend client
const { _id, name, email} = user;
return res.json({ token, user: { _id, email, name } });
});
};
exports.signout = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "Signout Success!"})
};


//if the token is valid, express jwt appends the verified users id
    // in an auth key to the requested object
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
});