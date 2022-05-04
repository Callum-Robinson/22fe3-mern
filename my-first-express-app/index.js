// entry point of app when it starts
// Import the express module
const express = require('express');
const User = require('./my_js_modules/user');
const helper = require('./my_js_modules/helper');

// If a port wasn't specified as an environment variable, it will default to
// port 3000.
const port = process.env.PORT || 3000;

// create an instance of an express server
const app = express();

// add a get route
// app.get(route, callbackfn);
app.get("/", (request, response) => {
    // .send() will send the specified data and set the status to a default 200 OK
    response.send('Hello world');
});

app.get("/obj", (request, response) => {
    // .send() will send the specified data and set the status to a default 200 OK
    let obj = { username: "Fred" };
    response.json(obj); // .json() converts a JS object to JSON and returns it with the appropriate content-type
});

// localhost:3000/query?country=England
app.get("/query", (request, response) => {
    // query parameters are accessed by request.query
    const country = request.query.country;

    // if (country) is true if country is not undefined or null, otherwise it is false
    if (country) {
        return response.status(200)
                       .contentType('html')
                       .send(`The country is ${country}`);
    }
    return response.status(400).contentType('html').send(`Bad request, country must be specified`);
});

// path variables are specified in the path following a colon
app.get("/path/:city", (request, response) => {
    // path variables are accessed via request.params
    const city = request.params.city;

    // if (country) is true if country is not undefined or null, otherwise it is false
    if (city) {
        return response.status(200)
                       .contentType('html')
                       .send(`The city is ${city}`);
    }
    return response.status(400).contentType('html').send(`Bad request, country must be specified`);
});


// Exercise: Recreate the times table exercise from earlier, 
//           but using Express instead of the Node.js HTTP module
app.get("/table", (request, response) => {
    const table = request.query.table || 1;
    const range = request.query.range || 10;

    let data = `<h1>${table} times table</h1>\n`;
    for (let i = 1; i <= range; i++) {
        data += `<li>${table} x ${i} = ${table * i}</li>\n`;
    }
    response.status(200)
            .contentType('html')
            .send(data);
});

app.get("/user", (request, response) => {
    response.json(new User("Bob", helper.SEED));
});


// start the server
// app.listen(port, callbackfn)
const server = app.listen(port, () => {
    // this callback runs once the server is up
    console.log(`Server up: ${server.address().address}:${port}`)
});