const express = require('express');

const { travelModel } = require('../services');
const { driverController } = require('../controllers');

const router = express.Router();

router.get('/', driverController.findAll);

router.get('/:id', driverController.findById);

router.post('/', driverController.createDriver);

router.patch('/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;

  const [{ travelStatusId }] = await travelModel.findById(travelId);

  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  const result = await travelModel.updateStatus(nextTravelStatusId, driverId, travelId);

  if (!result) return res.status(404).json({ message: 'Travel not found' });

  const [travelsFromDB] = await travelModel.findById(travelId);

  res.status(200).json(travelsFromDB);
});

router.get('/open/travels', driverController.findOpensTravels);

module.exports = router;