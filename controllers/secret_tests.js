const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');



//The below should return to the console log.

exports.authorization_secret_test = (req, next) => {

let authorization_secret_tests = req.post && req.auth && req.post.postedBy._id == req.auth._id;     

    console.log('req.post ', req.post);
    console.log('req.auth', req.auth);
    console.log('req.post.postedBy._id', req.post.postedBy._id);
    console.log('req.auth._id', req.auth._id);

    if (!isPoster) {
        return res.status(403).json({
            error: 'User is not authorized'
        });
    }
    next();

};

    


//use  get method

