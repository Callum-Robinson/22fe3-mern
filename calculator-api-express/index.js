const express = require('express');
const calculator = require('./calculator');

const port = process.env.PORT || 3000;

const app = express();

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

// add?num1=32&num2=5
app.get("/add", doBinaryOperation);
app.get("/subtract", doBinaryOperation);
app.get("/multiply", doBinaryOperation);

const server = app.listen(port, function() {
    console.log(`Server up on port ${port}`);
});