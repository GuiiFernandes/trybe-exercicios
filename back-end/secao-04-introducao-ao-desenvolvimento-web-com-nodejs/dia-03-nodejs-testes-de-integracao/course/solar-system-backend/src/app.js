const express = require('express');
const { readData, writeData, updateData } = require('./utils/fs');

const app = express();

app.use(express.json());

app.get('/missions', async (req, res) => {
  const missions = await readData();
  res.status(200).json({ missions });
});

app.post('/missions', async (req, res) => {
  const newMission = req.body;
  const newData = await writeData(newMission);
  res.status(201).json([...newData]);
});

app.put('/missions/:id', async (req, res) => {
  const { id } = req.params;
  const newMission = req.body;
  const newData = await updateData(+id, newMission);
  if (!newData) return res.status(404).json({ message: 'Mission not found!' });
  res.status(200).json([...newData]);
});

module.exports = app;