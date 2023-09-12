const express = require('express');

const { travelModel } = require('../models');
const { travelService } = require('../service');

const router = express.Router();

router.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;
  const newTravel = {
    passengerId: +passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  };

  const { status, data } = await travelService.requestTravel(newTravel);

  return res.status(status).json(data);
});

router.get('/drivers/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;
  const { status, data } = await travelService.getOpenTravels(WAITING_DRIVER);
  res.status(status).json(data);
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