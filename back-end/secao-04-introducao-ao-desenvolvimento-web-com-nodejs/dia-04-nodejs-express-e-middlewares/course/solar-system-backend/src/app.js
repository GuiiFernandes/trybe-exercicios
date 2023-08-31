const express = require('express');

const { readData, writeData, updateData, deleteData } = require('./utils/fs');

const app = express();

app.use(express.json());

const validateMissionId = (req, res, next) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) return res.status(400).json({ message: 'Invalid ID!' });
  next();
};

const validadeMissionData = (req, res, next) => {
  const requeridKeys = ['name', 'year', 'country', 'destination'];
  if (requeridKeys.every((key) => key in req.body)) return next();
  res.status(400).json({ message: 'A missão precisa receber todos os atributos!' });
};

app.get('/missions', async (req, res) => {
  const missions = await readData();
  res.status(200).json({ missions });
});

app.post('/missions', validadeMissionData, async (req, res) => {
  const newMission = req.body;
  const newData = await writeData(newMission);
  res.status(201).json([...newData]);
});

app.put('/missions/:id', validadeMissionData, validateMissionId, async (req, res) => {
  const { id } = req.params;
  const newMission = req.body;
  const newData = await updateData(+id, newMission);
  if (!newData) return res.status(404).json({ message: 'Mission not found!' });
  res.status(200).json([...newData]);
});

app.delete('/missions/:id', validateMissionId, async (req, res) => {
  const { id } = req.params;
  const db = await deleteData(+id);
  if (!db) return res.status(404).json({ message: 'Mission not found!' });
  res.status(200).json(db);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

module.exports = app;