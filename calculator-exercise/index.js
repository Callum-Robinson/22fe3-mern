const { request } = require('express');
const express = require('express');
const calculator = require('./js-modules/calculator');

const port = process.env.PORT || 3000;

const app = express();

// Addition
app.get("/add/:a/:b", (request, response) => {
    const a = Number(request.params.a);
    const b = Number(request.params.b);

    if (!a || !b) {
        return response.status(400).send(`Bad request, two numbers needed`);
    }
    let result = calculator.add(a, b);

    const output = {
        "operation": "addition",
        "number 1": a,
        "number 2": b,
        "result": result
    };

    response.json(output);
});

// Subtraction
app.get("/subtract/:a/:b", (request, response) => {
    const a = Number(request.params.a);
    const b = Number(request.params.b);

    if (!a || !b) {
        return response.status(400).send(`Bad request, two numbers needed`);
    }
    let result = calculator.subtract(a, b);

    const output = {
        "operation": "subtraction",
        "number 1": a,
        "number 2": b,
        "result": result
    };

    response.json(output);
});

// Mulitiplication
app.get("/multiply/:a/:b", (request, response) => {
    const a = Number(request.params.a);
    const b = Number(request.params.b);

    if (!a || !b) {
        return response.status(400).send(`Bad request, two numbers needed`);
    }
    let result = calculator.multiply(a, b);

    const output = {
        "operation": "multiplication",
        "number 1": a,
        "number 2": b,
        "result": result
    };

    response.json(output);
});

// Division
app.get("/divide/:a/:b", (request, response) => {
    const a = Number(request.params.a);
    const b = Number(request.params.b);

    if (!a || !b) {
        return response.status(400).send(`Bad request, two numbers needed`);
    }
    let result = calculator.divide(a, b);

    const output = {
        "operation": "division",
        "number 1": a,
        "number 2": b,
        "result": result
    };

    response.json(output);
});

// Odd or even
app.get("/oddoreven/:a", (request, response) => {
    const a = Number(request.params.a);

    if (!a) {
        return response.status(400).send(`Bad request, a number needed`);
    }
    let result = calculator.oddOrEven(a);

    const output = {
        "operation": "odd or even?",
        "number 1": a,
        "result": result
    };

    response.json(output);
});

// Factorial
app.get("/factorial/:a", (request, response) => {
    const a = Number(request.params.a);

    if (!a) {
        return response.status(400).send(`Bad request, a number needed`);
    }
    let result = calculator.factorial(a);

    const output = {
        "operation": "factorial",
        "number 1": a,
        "result": result
    };

    response.json(output);
});

// Prime
app.get("/prime/:a", (request, response) => {
    const a = Number(request.params.a);

    if (!a) {
        return response.status(400).send(`Bad request, a number needed`);
    }
    let result = calculator.prime(a);

    const output = {
        "operation": "is prime?",
        "number 1": a,
        "result": result
    };

    response.json(output);
});


const server = app.listen(port, () => {
    console.log(`Server up: ${server.address().address}:${port}`)
});