const express = require('express');
const calculatorRouter = require('./routes/calculator-routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(calculatorRouter);

const server = app.listen(PORT, function() {
    console.log(`Server up on ${PORT}`);
});