const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// logRequest is a middleware function
function logRequest(request, response, next) {
    // next holds a reference to the next middleware function in the middleware stack
    // - next is passed in for us
    console.log('-- REQUEST RECEIVED --');
    console.log(`PATH: ${request.path}\nMETHOD: ${request.method}`);
    next(); // calls the next middleware function in the stack
}

function shout(request, response, next) {
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!");
    next();
}

// we can pass middleware functions to app.use(), by default it applies
// to all pieces of middleware after this one in the middleware stack.
app.use(logRequest); // logs all inbound requests
// app.use("/shout", shout); // applies shout middleware function only to the path "/shout"

app.get("/", function (request, response) {
    response.send("Hello world"); // response.send() and response.end() return the response, no more middleware is called
});

// We can apply middleware to specific routes
app.get("/shout", shout, function(request, response) {
    response.send("shouted");
});

// we can supply multiple middleware functions
app.get("/other", function(request, response, next) {
    next();
}, function(request, response) {
    response.send("other");
});

// ERROR HANDLING MIDDLEWARE //
// accepts 4 parameters, (error, request, response, next) or 3 if sending the response (error, request, response)
// - we can call error handling middleware by passing an error to next(error) or by throwing an error (express will automatically call next(error))
function errorLogger(error, request, response, next) {
    console.log("ERROR OCCURED");
    next(error);
}

function errorResponse(error, request, response, next) {
    // the next parameter is always required, this is because of Express' built-in middleware for error handling,
    // the default error handler
    response.status(400).send("Bad request!");
}

app.get("/throws", (request, response, next) => {
    throw new Error("Something went wrong");
    // let error = new Error("Something went wrong");
    // next(error);
});

app.use(errorLogger);
app.use(errorResponse);

const server = app.listen(PORT, function() {
    console.log(`Server up on ${PORT}`);
});