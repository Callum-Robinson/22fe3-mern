// We create schemas with MongoDB & the Mongoose API to model how our documents in a collection
// are structured, we can also apply validation.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // we only need to specify _id if we want to override the default ObjectIds that MongoDB usually generates
    username: String,
    email: String,
    createdAt: Date,
    admin: Boolean
});

// 1. create a model of the above schema
const User = mongoose.model('User', userSchema); // model(SchemaName, schemaObject);

// 2. export the model
module.exports = User;