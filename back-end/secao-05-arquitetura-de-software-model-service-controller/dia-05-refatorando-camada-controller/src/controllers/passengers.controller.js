const { travelService } = require('../services');

const createTravel = async (req, res) => {
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
};

module.exports = {
  createTravel,
};