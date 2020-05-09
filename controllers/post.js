//Requires the formatting of the application's input with standards
//It uses the file within model called post which sets the formatting
const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');
//Prints all posts to (postman) screen
exports.getPosts = (req, res) => {
    const posts = Post.find()
        .populate('postedBy', '_id name')
        .select('_id title body ')
        .then(posts => {
            res.json({ posts });
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