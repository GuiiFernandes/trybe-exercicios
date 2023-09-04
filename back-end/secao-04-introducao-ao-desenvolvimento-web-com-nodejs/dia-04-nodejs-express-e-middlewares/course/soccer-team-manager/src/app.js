const express = require('express');
const morgan = require('morgan');
require('express-async-errors');

const errors = require('./middlewares/errors');

const app = express();

app.use(morgan('dev'));
app.use(express.static('/images'));
app.use(express.json());

app.use('/teams', teamsRouter);

app.use(errors);

module.exports = app;