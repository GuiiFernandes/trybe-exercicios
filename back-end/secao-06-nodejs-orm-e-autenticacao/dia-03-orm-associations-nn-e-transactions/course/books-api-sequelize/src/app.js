const express = require('express');

const userBookController = require('./controllers/userBook.controller');

const app = express();

app.use(express.json());

app.get('/userbooks/:id', userBookController.getUsersBooksById);
app.use((_err, _req, res, _next) => res.status(500).json({ message: 'Algo deu errado! Tente novamente' }));

module.exports = app;

