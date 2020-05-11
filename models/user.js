const mongoose = require("mongoose");
//const uuidv1 = require('uuid/v1'); //breaks it and fails so I use var instead
const crypto = require('crypto');
var uuidv1 = require('uuidv1');


// This where we set the scaffold to receive the profile creation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
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
 * Virtual fields are not persisted to the database (password will be a virtual field with logic)
 */

 //virtual field
 userSchema.virtual('password')
 .set(function(password) {
     //create a temp passowrd 
     this._password = password 
     // Next we add some salt 
     this.salt = uuidv1()
     //encrypt the password()
     this.hashed_password = this.encryptPassword(password)
 })
 .get(function() {
     return this._password
 })
// methods to our schema [ our encryption process]
userSchema.methods = {
    authenticate: function(plainText) {
return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
        if(!password) return "";
        try {
        return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
        } catch (err) {
                return ""
        }
    }
}

module.exports = mongoose.model("User", userSchema);