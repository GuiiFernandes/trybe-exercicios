const response = require('../utils/serviceResponses');
const validates = require('./validations');
const { genericCruds } = require('../models');

const requestTravel = async (travelData) => {
  const error = validates.validateNewTravel(travelData);
  if (error) return error;
  const passagerExist = genericCruds.findById({ table: 'passengers', id: travelData.passengerId });
  if (!passagerExist) return response({ message: 'Passenger not found' }).NOT_FOUND;
  const travel = await genericCruds.create({ table: 'travels', data: travelData });
  return response({ travel, message: 'Travel created successfully' }).CREATED;
};

module.exports = {
  requestTravel,
};