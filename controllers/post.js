//Requires the formatting of the application's input with standards
//It uses the file within model called post which sets the formatting
const Post = require('../models/post')

//Good point to review later
exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: "First post" }, { title: "second post" }]
    });
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