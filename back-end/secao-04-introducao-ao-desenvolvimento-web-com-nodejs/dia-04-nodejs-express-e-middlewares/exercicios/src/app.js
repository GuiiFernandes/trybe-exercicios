const express = require('express');

const activitiesRouter = require('./routers/activities');
const signupRouter = require('./routers/signup');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signupRouter);

module.exports = app;
