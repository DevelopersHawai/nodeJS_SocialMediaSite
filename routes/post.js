// The router here allows us to post information and to go to working links
//require express so that we can use the router
const express = require("express");
// get methods from the controllers post file
// My recommendation is to refactor and set each method 
//as its own file // so that this can be enterprise ready
const {getPosts,      
        createPost,  
        postsByUser,   
        postById,
        isPoster, 
        deletePost
    } = require("../controllers/post");
//const {createPost} = require("../controllers/post");  //This is using the "object destructuring"
const { requireSignin } = require("../controllers/auth"); //middleware to the get amd post routes
const { userById } = require("../controllers/user"); // This method could be used anywhere
const {createPostValidator} = require("../validator"); // you dont need to put index

//The router allows us to get receive information
const router = express.Router();

router.get("/", getPosts); // to lock down public posts

router.post("/post/new/:userId", requireSignin, 
createPost, createPostValidator ); //validator method
//The above line looks at the app for middleware


//It is not manadatory to have requireSignin, although
router.get("/posts/by/:userId", requireSignin, postsByUser); //comes from the req.profile
router.delete("/post/:postId", requireSignin, isPoster, deletePost); //when the url gets the post, it will execute
//the correct post and make it a valid

//any route containing userId, our app will first execute userByID function
router.param("userId", userById);  // this broke the postedby ; so I used the corret "case" of letter 'D'

//any route containing postById, our app will first execute postById function
router.param("postId", postById);  // Accidentally put postById in first param ~ by having the first param
//wrong it caused authorization errors.


//Then we package the entire file as a function to be used as "router" later
module.exports = router;




