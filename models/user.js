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
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
})

/**
 * Virtual fields are not persisted to the database
 */

module.exports = mongoose.model("User", userSchema);