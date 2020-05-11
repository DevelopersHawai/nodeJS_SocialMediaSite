const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema //is the actual post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true        
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: Buffer,
        contentType: String

    },
    //Changed to single quotes for consistency
        // as it might be effecting the model ref in route post indirectly
    postedBy: { //Assigns ObjectId as a post and makes it come from a user
        type: ObjectId,
        ref: "User" 
        },

        created: {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("Post", postSchema);
