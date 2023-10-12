const express = require('express');

const { passengerRouter, carRouter, driversRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);
app.use('/cars', carRouter);
app.use('/drivers', driversRouter);

module.exports = app;