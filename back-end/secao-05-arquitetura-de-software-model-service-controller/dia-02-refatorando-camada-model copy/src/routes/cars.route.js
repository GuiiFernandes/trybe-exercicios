const express = require('express');

const { genericCruds } = require('../models');

const table = 'cars';

const router = express.Router();

router.get('/', async (_req, res) => {
  const cars = await genericCruds.findAll({ table });
  res.status(200).json(cars);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const car = await genericCruds.findById({ table, id });
  if (!car) return res.status(404).json({ message: 'Car not found' });
  return res.status(200).json(car);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await genericCruds.deleteById({ table, id });
  if (!isDeleted) return res.status(404).json({ message: 'Car not found' });
  return res.status(204).end();
});

router.post('/', async (req, res) => {
  const data = req.body;
  const car = await genericCruds.create({ table, data });
  res.status(201).json({
    car,
    message: 'Car created successfully',
  });
});

module.exports = router;