const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const dotnev = require('dotenv');
dotnev.config();








// Database Connection String goes here


mongoose
    .connect(
        process.env.MONGO_URI,
        
        //The line below uses Unified Topology & New URL Parser
        { useUnifiedTopology: true, useNewUrlParser: true },
        )
.then(() => console.log('Database is connected')); 
mongoose.connection.on("error", err => {
   console.log('Connection Error with Database: ${err.message}');

 
  });



// Import the routes 
const postRoutes = require("./routes/post");

//const myOwnMiddleware = (req, res, next) => {
//    console.log("Middleware applied!!!");
 //   next()
//};

//middleware
app.use(morgan('dev'));

app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
});