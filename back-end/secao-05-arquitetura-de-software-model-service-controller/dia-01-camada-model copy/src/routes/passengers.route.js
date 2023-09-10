const express = require('express');

const { genericCruds } = require('../models');

const TABLE = 'passengers';

const router = express.Router();

router.get('/', async (_req, res) => {
  const passengers = await genericCruds.findAll(TABLE);
  res.status(200).json(passengers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const passenger = await genericCruds.findById(TABLE, id);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(200).json(passenger);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await genericCruds.deleteById(TABLE, id);
  if (!isDeleted) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(204).end();
});

router.post('/', async (req, res) => {
  const newPassenger = req.body;
  const passenger = await genericCruds.create(TABLE, newPassenger);
  res.status(201).json({
    passenger,
    message: 'Passenger created successfully',
  });
});

module.exports = router;