const { addCarSchema, addRequestTravelSchema, addDriverSchema } = require('./schemas');
const response = require('../../utils/serviceResponses');

const validateNewCar = (newCar) => {
  const { error } = addCarSchema.validate(newCar);
  if (error) return response({ message: error.message }).BAD_REQUEST;
};

const validateNewTravel = (newTravel) => {
  const { error } = addRequestTravelSchema.validate(newTravel);
  if (error) return response({ message: error.message }).BAD_REQUEST;
};

const validateNewDriver = (newDriver) => {
  const { error } = addDriverSchema.validate(newDriver);
  if (error) return response({ message: error.message }).BAD_REQUEST;
};

module.exports = {
  validateNewCar,
  validateNewTravel,
  validateNewDriver,
};