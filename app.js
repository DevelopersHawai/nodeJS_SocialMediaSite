//02:13
const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

dotenv.config();








// Database Connection String goes here
// // // Local Database is located at: mongodb://localhost

mongoose
    .connect(
        process.env.MONGO_URI, {
        
        //The line below uses Unified Topology & New URL Parser
        useUnifiedTopology: true, useNewUrlParser: true 
        })
.then(() => console.log('Database is now connected...', )); 
mongoose.connection.on("error", err => {
   console.log('Connection Error with Database: ${err.message}');

 
  });



// Import the routes 
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

//const myOwnMiddleware = (req, res, next) => {
//    console.log("Middleware applied!!!");
 //   next()
//};

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); // enables the body to be parsed otherwise you would see title only
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);


const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
    console.log(`A Database operating and on connection to: ${mongoURI}`);
});