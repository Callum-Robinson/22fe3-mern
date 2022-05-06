// We create schemas with MongoDB & the Mongoose API to model how our documents in a collection
// are structured, we can also apply validation.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // we only need to specify _id if we want to override the default ObjectIds that MongoDB usually generates
    username: String,
    // to apply validation, we must supply an object instead of the type directly
    email: {
        type: String,
        minlength: 8,
        maxlength: 128,
        trim: true,
        required: [true, 'Email must be at least 8 characters and no more than 128'],
        match: /^[a-z]+@[a-z]+[.][a-z]+/
        // match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    admin: {
        type: Boolean,
        default: false
    }
});

// 1. create a model of the above schema
const User = mongoose.model('User', userSchema); // model(SchemaName, schemaObject);

// 2. export the model
module.exports = User;