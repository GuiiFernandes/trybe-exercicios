const express = require('express');

const { genericCruds } = require('../models');
const { travelController } = require('../controllers');
const middles = require('../middlewares');

const table = 'passengers';

const router = express.Router();

router.get('/', async (_req, res) => {
  const passengers = await genericCruds.findAll({ table });
  res.status(200).json(passengers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [passenger] = await genericCruds.findById({ table, id });
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(200).json(passenger);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await genericCruds.deleteById({ table, id });
  if (!isDeleted) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(204).end();
});

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  const data = { name, email, phone };
  const passenger = await genericCruds.create({ table, data });
  if (!passenger) return res.status(400).json({ message: 'Passenger not created' });
  res.status(201).json({
    passenger,
    message: 'Passenger created successfully',
  });
});

router.post(
  '/:passengerId/request/travel',
  middles.travelFieldsExists,
  travelController.createTravel,
);

module.exports = router;