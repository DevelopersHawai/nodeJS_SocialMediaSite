const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');



//find all the posts by a particular user (id_ name)
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


//return all posts
exports.getPosts = (req, res) => {
    const posts = Post.find()
        .populate('postedBy', '_id name')
        .select('_id title body ')
        .then(posts => {
            res.json(posts);
        })
        // if error is found it will print the error to the console log
        .catch(err => console.log(err));
};


//create a post uses library called formidable
exports.createPost = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let post = new Post(fields);

        req.profile.hashed_password = undefined;
        req.profile.salt = undefined;
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
            res.json(result);
        });
    });
};

//Old post method
// exports.createPost = (req, res, next) => {
// const post = new Post(req.body);
// post.save().then(result =>{
//     res.json({
//         post: result
//     });
// });
// };



// id numbers are about as usual as IP numbers, the method below returns:
//All posts_by_user 
// sames as exports post by the (_id) but show the name as well
exports.postsByUser = (req, res) => {
    Post.find({ postedBy: req.profile._id })
        .populate('postedBy', '_id name')  //key values are more useful by names as people will not remember an id
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

//updates a post

exports.updatePost = (req, res, next) => {
    let post = req.post 
    post = _.extend(post, req.body);
    post.updated = Date.now();
    post.save(err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(post);
    });
};









//deletes the post
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