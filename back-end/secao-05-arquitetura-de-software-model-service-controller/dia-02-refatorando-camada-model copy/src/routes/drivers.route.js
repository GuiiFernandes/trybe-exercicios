const express = require('express');

const { genericCruds } = require('../models');

const table = 'drivers';

const router = express.Router();

router.get('/', async (_req, res) => {
  const drivers = await genericCruds.findAll({ table });
  res.status(200).json(drivers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [driver] = await genericCruds.findById({ table, id });
  if (!driver) return res.status(404).json({ message: 'Driver not found' });
  return res.status(200).json(driver);
});

router.post('/', async (req, res) => {
  const data = req.body;
  const driver = await genericCruds.create({ table, data });
  res.status(201).json({
    driver,
    message: 'Driver created successfully',
  });
});

module.exports = router;