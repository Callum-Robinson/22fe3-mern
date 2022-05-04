const express = require('express');
const userRouter = require('./routes/user-router');

const PORT = process.env.PORT || 3000;
const app = express();

// 1. Add a request logger to the beginning of the middleware chain
//    - create a function which accepts (request, response, next) and logs info, then calls next()
//    - apply the middleware with app.use()

// middleware
// express.json() middleware uses the body-parser dependency (included in Express) to parse JSON request bodies
// into request.body
app.use(express.json());
//app.use(express.urlencoded({ extended: false })); // allows parsing form data/url encoded data into the body
app.use(express.static("public")); // serves files from the public directory 

app.use("/user", userRouter);

const server = app.listen(PORT, function() {
    console.log(`Server up on ${PORT}`);
});