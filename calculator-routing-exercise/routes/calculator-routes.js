const calculator = require('../calculator');
const express = require('express');
const router = express.Router();

router.get("/add", doBinaryOperation);
router.get("/subtract", doBinaryOperation);
router.get("/multiply", doBinaryOperation);
router.get("/divide", doBinaryOperation);
router.get("/oddoreven", doUnaryOperation);
router.get("/factorial", doUnaryOperation);
router.get("/prime", doUnaryOperation);

function doBinaryOperation(request, response) {
    const a = Number(request.query.a);
    const b = Number(request.query.b);

    if (!a || !b) {
        return response.status(400).send("Number inputs needed");
    }

    let result;
    let operation;
    
    switch (request.path.toLowerCase()) {
        case "/add":
            operation = "Addition";
            result = calculator.add(a, b);
            break;
        case "/subtract":
            operation = "Subtraction";
            result = calculator.subtract(a, b);
            break;
        case "/multiply":
            operation = "Multiplication";
            result = calculator.multiply(a, b);
            break;
        case "/divide":
            operation = "Division";
            result = calculator.divide(a, b);
    }
    return response.json({
        "operation": operation,
        "number 1": a,
        "number 2": b,
        "result": result
    });
}

function doUnaryOperation(request, response) {
    const a = Number(request.query.a);

    if (!a) {
        return response.status(400).send("Number input needed");
    }

    let result;
    let operation;
    
    switch (request.path.toLowerCase()) {
        case "/oddoreven":
            operation = "Odd or Even?";
            result = calculator.oddOrEven(a);
            break;
        case "/factorial":
            operation = "Factorial";
            result = calculator.factorial(a);
            break;
        case "/prime":
            operation = "Is Prime?";
            result = calculator.prime(a);
            break;
    }
    return response.json({
        "operation": operation,
        "number 1": a,
        "result": result
    });
}

module.exports = router;