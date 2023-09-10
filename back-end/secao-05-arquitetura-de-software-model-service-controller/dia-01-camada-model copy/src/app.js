const express = require('express');

const passengerRouter = require('./routes/passengers.route');
const carRouter = require('./routes/cars.route');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);

app.use('/cars', carRouter);

module.exports = app;
