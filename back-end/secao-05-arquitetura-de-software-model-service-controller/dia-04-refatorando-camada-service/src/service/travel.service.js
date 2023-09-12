const response = require('../utils/serviceResponses');
const validates = require('./validations');
const { genericCruds, travelModel } = require('../models');

const requestTravel = async (travelData) => {
  const error = validates.validateNewTravel(travelData);
  if (error) return error;
  const passagerExist = await genericCruds.findById({
    table: 'passengers',
    id: travelData.passengerId,
  });
  if (!passagerExist) return response({ message: 'Passenger not found' }).NOT_FOUND;
  const insertId = await travelModel.insert(travelData);
  const travel = await genericCruds.findById({ table: 'travels', id: insertId });
  return response({ travel, message: 'Travel created successfully' }).CREATED;
};

const getOpenTravels = async () => {
  const WAITING_DRIVER = 1;
  const travelsOpen = await travelModel.findByStatusId(WAITING_DRIVER);
  if (!travelsOpen.length) {
    return response({ message: 'There are no open trips' }).SUCCESS;
  }
  return response(travelsOpen).SUCCESS;
};

module.exports = {
  requestTravel,
  getOpenTravels,
};