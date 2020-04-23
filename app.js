const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const dotnev = require('dotenv');
dotnev.config();



//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://corey:<password>@nodeapi-70ovy.mongodb.net/test?retryWrites=true&w=majority";





// Database Connection String goes here

//const MongoClient = require('mongodb').MongoClient;

mongoose
    .connect(
        process.env.MONGO_URI,
        
        //The line below uses Unified Topology & New URL Parser
        { useUnifiedTopology: true, useNewUrlParser: true },
        )
.then(() => console.log('Database is connected')); 
mongoose.connection.on("error", err => {
   console.log('Connection Error with Database: ${err.message}');

  //const uri = "mongodb+srv://corey:1234password@nodeapi-70ovy.mongodb.net/test?retryWrites=true&w=majority";
  //const client = new MongoClient(uri, { useNewUrlParser: true });
  //client.connect(err => {
  //  const collection = client.db("test").collection("devices");
    // perform actions on the collection object
  //  client.close();
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