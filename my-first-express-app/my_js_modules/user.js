// module.exports is used to export functions, properties, objects, classes, etc...

// this is the default export for this file 
module.exports = function User(username, seed) {
    this.username = username;
    this.seed = seed;
}