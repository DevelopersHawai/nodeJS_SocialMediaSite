const mongoose = require("mongoose");



// This where we set the scaffold to receive the profile creation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: ture,
        required: true
    },
    email: {
        type: String,
        trim: ture,
        required: true
})