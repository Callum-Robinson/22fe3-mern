const express = require('express');

// import the router
const calculatorRouter = require('./routes/calculator-routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Adds all the routes to the root
// - localhost:8080/example
// - localhost:8080/add
// - etc...
// app.use(calculatorRouter);

// Adds all the routes to the specified path
// - localhost:8080/calc/example
// - localhost:8080/calc/add
// - etc...

app.use("/calc", calculatorRouter);

const server = app.listen(PORT, function() {
    console.log(`Server up on ${PORT}`);
});