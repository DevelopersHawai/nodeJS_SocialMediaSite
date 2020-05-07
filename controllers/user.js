const User = require("../models/user");


exports.userById = (req, res, next , id) => {
    User.findById(id).exec((err, user) => {
if(err || !user) {
    return res.status(400).json({
        error: "User not found"
    })
}
req.profile = user // adds profile object req user info
next();
    });
};


// Shout out to Ryan Dhungel for this awesome method
//
exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        });
    }
};

exports.allUsers = (req, res ) => {

    User.find((err, users) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({ users });
    }).select("name email updated created"); // This is where you print back to all user function
    // You should make it kick back only usernames of people, but the usernames are by company name
    //So that they can do business quickly
};

exports.getUser = (req, res) => {     //This is what makes a single profile work single user view
req.profile.hashed_password = undefined;  //Hides the password from average users
req.profile.salt = undefined;
    return res.json(req.profile);

};
