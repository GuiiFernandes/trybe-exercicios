const express = require('express');
const camelize = require('camelize');

const { genericCruds, travelModel } = require('../models');

const router = express.Router();

router.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await genericCruds.findById({ table: 'passengers', id: passengerId });
  if (!passenger.length) { return res.status(404).json({ message: 'Passenger not found' }); }

  const travelId = await travelModel.insert({
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  });

  const newTravel = await travelModel.findById(travelId);

  return res.status(201).json(newTravel);
});

router.get('/drivers/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;
  const travelsFromDB = await travelModel.findByStatusId(WAITING_DRIVER);
  res.status(200).json(camelize(travelsFromDB));
});

router.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;

  const [{ travelStatusId }] = await travelModel.findById(travelId);

  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  const result = await travelModel.updateStatus(nextTravelStatusId, driverId, travelId);

  if (!result) return res.status(404).json({ message: 'Travel not found' });

  const [travelsFromDB] = await travelModel.findById(travelId);

  res.status(200).json(travelsFromDB);
});

module.exports = router;