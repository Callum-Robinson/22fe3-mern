const calculator = require('../calculator');
// import router from express
const express = require('express');
const router = express.Router();

// the instance of Router allows us to add routes using the .get(), .post(), .patch(), etc... 
// function calls.
// - after adding all the routes, we must export the router from this file (see end of file)

router.get("/example", function(request, response) {
    response.send("This is an example");
});

router.get("/add", doBinaryOperation);

function doBinaryOperation(request, response) {
    const num1 = Number(request.query.num1); // returns NaN if not a number
    const num2 = Number(request.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.status(400).send("Inputs must be numerical");
        return;
    }

    // request.path returns the path, i.e., /add, /subtract, etc...
    let result;
    switch (request.path.toLowerCase()) {
        case "/add":
            result = calculator.add(num1, num2);
            break;
        case "/subtract":
            result = calculator.subtract(num1, num2);
            break;
        case "/multiply":
            result = calculator.multiply(num1, num2);
            break;
    }
    return response.json({
        "operation": request.path,
        "num1": num1,
        "num2": num2,
        "result": result
    });
}

module.exports = router;