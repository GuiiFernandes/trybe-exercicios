const express = require('express');

const { genericCruds } = require('../models');
const { carService } = require('../services');

const table = 'cars';

const router = express.Router();

router.get('/', async (_req, res) => {
  const { status, data } = await carService.getAllCars({ table });
  // const cars = await genericCruds.findAll({ table });
  res.status(status).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { status, data } = await carService.getCarById({ table, id });
  return res.status(status).json(data);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await genericCruds.deleteById({ table, id });
  if (!isDeleted) return res.status(404).json({ message: 'Car not found' });
  return res.status(204).end();
});

router.post('/', async (req, res) => {
  const { model, licensePlate, year, color, driverId } = req.body;
  const newCar = { model, licensePlate, year, color, driverId };
  // const car = await genericCruds.create({ table, data });
  const result = await carService.createCar({ table, newCar });
  res.status(result.status).json(result.data);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { model, licensePlate, year, color, driverId } = req.body;
  const newData = { model, licensePlate, year, color, driverId };
  const result = await carService.updateCar({ table, id, newData });
  res.status(result.status).json(result.data);
});

module.exports = router;