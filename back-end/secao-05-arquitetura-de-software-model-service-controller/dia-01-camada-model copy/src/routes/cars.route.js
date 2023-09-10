const express = require('express');

const { genericCruds } = require('../models');

const TABLE = 'cars';

const router = express.Router();

router.get('/', async (_req, res) => {
  const cars = await genericCruds.findAll(TABLE);
  res.status(200).json(cars);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const car = await genericCruds.findById(TABLE, id);
  if (!car) return res.status(404).json({ message: 'Car not found' });
  return res.status(200).json(car);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await genericCruds.deleteById(TABLE, id);
  if (!isDeleted) return res.status(404).json({ message: 'Car not found' });
  return res.status(204).end();
});

router.post('/', async (req, res) => {
  const newCar = req.body;
  const car = await genericCruds.create(TABLE, newCar);
  res.status(201).json({
    car,
    message: 'Car created successfully',
  });
});

module.exports = router;