const express = require("express");
const { userById } = require("../controllers/user");

//The router allows us to get receive information
const router = express.Router();



// The router here allows us to post information
router.post("/signup", userSignupValidator, signup); //validator method
router.post("/signin", signin); //signin
router.get("/signout", signout); //signout
//The above line looks at the app for middleware


//any route containing userId, our app will first execute userByID
router.param("userID", userById);

//Then we package the entire file as a function to be used as "router" later
module.exports = router;