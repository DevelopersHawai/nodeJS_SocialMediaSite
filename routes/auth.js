//12:19
//require express so that we can use the router
const express = require("express");
const { signup } = require("../controllers/auth");
//const {createPost} = require("../controllers/post");  //This is using the "object destructuring"
//const validator = require("../validator"); // you dont need to put index

//The router allows us to get receive information
const router = express.Router();



// The router here allows us to post information
router.post("/signup", signup); //validator method
//The above line looks at the app for middleware

//Then we package the entire file as a function to be used as "router" later
module.exports = router;