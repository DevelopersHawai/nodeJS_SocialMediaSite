const express = require("express");
const app = express();
const morgan = require("morgan");


// Import the routes 
const postRoutes = require("./routes/post");

//const myOwnMiddleware = (req, res, next) => {
//    console.log("Middleware applied!!!");
 //   next()
//};

//middleware
app.use(morgan('dev'));

app.use("/", postRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
});