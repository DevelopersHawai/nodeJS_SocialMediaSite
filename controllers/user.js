const _ = require('lodash');
const User = require("../models/user");

//This is the method used to sort users by id
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
// This is the method to check authorization
exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        });
    }
};

// This is the method to spit out all the users in the system
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

//This is the method to get a single user and show you its contents once you are authenticated
exports.getUser = (req, res) => {     //This is what makes a single profile work single user view
    req.profile.hashed_password = undefined;  //Hides the password from all users
    req.profile.salt = undefined;  //Then taints the password to be unusable
    return res.json(req.profile);
};

//Allows user to update their own profile
exports.updateUser = (req, res, next) => { 
    let user = req.profile
    user = _.extend(user, req.body)  //extend - mutate (change )the source object 
    user.update = Date.now()
    user.save((err) => {
          if(err) {
              return res.status(400).json({
                  error: "You are not authorized to perform the previous action"
              })
          }
          req.profile.hashed_password = undefined;
          req.profile.salt = undefined;
          res.json({user})

    });
};

//Deletes the user
exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        } 
        req.profile.hashed_password = undefined;
          req.profile.salt = undefined;
          res.json({user});
    });
};
