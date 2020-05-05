//Requires the formatting of the application's input with standards
//It uses the file within model called post which sets the formatting
const Post = require('../models/post')

//Prints all posts to (postman) screen
exports.getPosts = (req, res) => {
    const posts = Post.find()
    .then((posts) => {
        res.status(200).json({posts: posts});
    })
    // if error is found it will print the error to the console log
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body); 
    //console.log("Creating  post: ", req.body);
   // post.save((err, result) => {
    //    if(err) {
   //         return res.status(400).json({
   //             error: err
   //         })
   //     }
   //     res.status(200).json({
   //         post: result
   //     });
   post.save().then(result => {
       res.status(200).json({
           post: result
       });
   });

};