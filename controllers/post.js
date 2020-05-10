const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');
//Prints all posts to (postman) screen


//Delete post method
exports.postById = (req, res, next, id) => { //method referenced in routes post 
    Post.findById(id)
        .populate('postedBy', '_id name') //Used in the ..models/post which defines
        .exec((err, post) => { //What a post is by reversing the post into an ObjectId
            if (err || !post) { // if error or no post
                return res.status(400).json({  //return 
                    error: err //This is a promise :  A promise may be in one:
                    // of 3 possible states: fulfilled, rejected, or pending which 
                    //has not happened yet but is 
                    //future tense
                });
            }
            req.post = post;   //based on the query we resolved above, 
           
            next(); //continue the flow of the application in the route
        });
};


exports.getPosts = (req, res) => {
    const posts = Post.find()
        .populate('postedBy', '_id name')
        .select('_id title body ')
        .then(posts => {
            res.json(posts );
        })
        // if error is found it will print the error to the console log
        .catch(err => console.log(err));
};

exports.createPost = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.stus(400).json({
                error: "Image could not be uploaded"
            });
        }
        //I will review this one a few more times as this is where the magic happens
        let post = new Post(fields);
        req.profile.hashed_password = undefined;  //Hides the users confidential information
        req.profile.salt = undefined;  //Uses Salt to mix it up more
        post.postedBy = req.profile;
        if (files.photo) {
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contentType = files.photo.type;
        }
        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(result)
        });
    });

};

exports.postsByUser = (req, res) => {
    Post.find({ postedBy: req.profile._id })
        .populate('postedBy', '_id name')
        .select('_id title body created')
        .sort('_created')
        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(posts);
        });
};


//if post is there and authentication is there
// if request_post_PostedBy_Id  matches 
//the authenicated id then we 
//have the correct person of the originating post
// To check if the above is working we will use console.log
// Very similar to the User Model from earlier...



exports.isPoster = (req, res, next) => {
    let isPoster = 
    req.post && req.auth && req.post.postedBy._id == req.auth._id;
    
//Console log tests


 //If the query did not match above it is not  the "isPoster"
 //403 code is access denied / forbidden

    if (!isPoster) {   
    return res.status(403).json({  
        error: "User is forbidden from deleting posts not of their own"
        });
    }
    next(); 
};




exports.deletePost = (req, res) => {
    let post = req.post;
    post.remove((err, post) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: "Post deleted successfully"
        });
    });
};

//Requires the formatting of the application's input with standards
//It uses the file within model called post which sets the formatting