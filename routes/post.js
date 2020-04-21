
//require express so that we can use the router
const express = require('express');
const postController = require("../controllers/post");

//The router allows us to get receive information
const router = express.Router();

router.get("/", postController.getPosts);

module.exports = router;




