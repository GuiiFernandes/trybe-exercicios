const express = require('express');

const { genericCruds } = require('../models');
const { carService } = require('../service');

const table = 'cars';

const router = express.Router();

router.get('/', async (_req, res) => {
  const { status, data } = await carService.getAllCars({ table });
  // const cars = await genericCruds.findAll({ table });
  res.status(status).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [car] = await genericCruds.findById({ table, id });
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
  const newCar = req.body;
  // const car = await genericCruds.create({ table, data });
  const { status, data } = await carService.createCar({ table, newCar });
  res.status(status).json(data);
});

module.exports = router;