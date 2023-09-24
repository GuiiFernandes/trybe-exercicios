const express = require('express');

const Book = require('./controllers/books.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);
app.post('/books', Book.create);
app.put('/books/:id', Book.update);
app.delete('/books/:id', Book.remove);

app.use((_err, _req, res, _next) => {
  res.status(500).json({ message: 'Algo deu errado' }); 
});

module.exports = app;