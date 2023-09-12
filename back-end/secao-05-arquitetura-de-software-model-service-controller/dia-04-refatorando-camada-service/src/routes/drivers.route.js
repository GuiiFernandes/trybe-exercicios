const express = require('express');

const { driverService } = require('../service');

const table = 'drivers';

const router = express.Router();

router.get('/', async (_req, res) => {
  const { status, data } = await driverService.getAllDrivers({ table });
  res.status(status).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { status, data } = await driverService.getDriverById({ table, id });
  return res.status(status).json(data);
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  const { status, data } = await driverService.createDriver({ table, data: { name } });
  res.status(status).json(data);
});

module.exports = router;