// The router here allows us to post information and to go to working links
//require express so that we can use the router
const express = require("express");
const {getPosts, createPost, postsByUser} = require("../controllers/post");
//const {createPost} = require("../controllers/post");  //This is using the "object destructuring"
const { requireSignin } = require("../controllers/auth"); //middleware to the get amd post routes
const { userById } = require("../controllers/user"); // This method could be used anywhere
const {createPostValidator} = require("../validator"); // you dont need to put index

//The router allows us to get receive information
const router = express.Router();

router.get("/", requireSignin, getPosts); // to lock down public posts

router.post("/post/new/:userId", requireSignin, createPost, createPostValidator ); //validator method
//The above line looks at the app for middleware


//It is not manadatory to have requireSignin, although
router.get("/posts/by/:userId", requireSignin, postsByUser); //comes from the req.profile


//any route containing userId, our app will first execute userByID
router.param("userId", userById);  // this broke the postedby ; so I used the corret "case" of letter 'D'

//Then we package the entire file as a function to be used as "router" later
module.exports = router;




