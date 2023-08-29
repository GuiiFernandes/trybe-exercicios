const express = require('express');
const { readData, writeData, updateData, deleteData, searchMovie } = require('./fs');

const app = express();
app.use(express.json());

app.get('/movies', async (_req, res) => {
  const data = await readData();
  if (!data) return res.status(500).json({ message: 'Loading errors!' });
  res.status(200).json(data);
});

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const result = await searchMovie(q);
  if (!result) return res.status(404).json({ message: 'Movie not found!' });
  res.status(200).json(result);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  const movie = data.find((movie) => movie.id === +id);
  if (!movie) return res.status(404).json({ message: 'Movie not found!' });
  res.status(200).json(movie);
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const data = await readData();
  data.push({ id: data[data.length -1].id + 1, movie, price });
  const result = await writeData(data);
  if (result.includes('Error')) return res.status(500).json({ message: result });
  res.status(201).json(result);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const result = await updateData(+id, { movie, price });
  if (!result) return res.status(404).json({ message: 'Movie not found!' });
  res.status(200).json(result);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const result = await deleteData(+id);
  if (!result) return res.status(404).json({ message: 'Movie not found!' });
  res.status(200).json({ message: 'Movie deleted!' });
});

module.exports = app;