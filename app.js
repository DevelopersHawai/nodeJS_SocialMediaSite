//02:13
const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
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
const userRoutes = require("./routes/user");

// apiDocs
app.get('/' , (req, res) => {
    fs.readFile('docs/apiDocs.json', (err, data) => { //if anyone looks for the root location
        //they will be given the contents of this file
        if(err) {
            res.status(400).json({
                error:err
            })
        }
        const docs = JSON.parse(data)
        res.json(docs)
    })
})

//const myOwnMiddleware = (req, res, next) => {
//    console.log("Middleware applied!!!");
 //   next()
//};



// middleware		
app.use(morgan("dev"));		
app.use(bodyParser.json());		
app.use(cookieParser());		
app.use(expressValidator());
app.use(cors());		 
app.use("/", postRoutes);		 
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use(function (err, req, res, next) {
if (err.name === 'UnauthorizedError') {
    res.status(401).json({error: "Unauthourized!"});
  
}

});




const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
    console.log(`A Database operating and on connection to: ${mongoURI}`);
});