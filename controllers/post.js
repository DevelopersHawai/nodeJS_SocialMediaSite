//Requires the formatting of the application's input with standards
//It uses the file within model called post which sets the formatting rules
//12:23
const Post = require("../models/post")

//Not sure we need the next 5 lines.  However it was from an old example
exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: "First post" }, { title: "second post" }]
    });
};

//This method creates posts then 
exports.createPost = (req, res) => {
    const post = new Post(req.body);  // builds a construct. to request the body
   post.save().then(result => {
       res.status(200).json({
           post: result
       });
   });
};