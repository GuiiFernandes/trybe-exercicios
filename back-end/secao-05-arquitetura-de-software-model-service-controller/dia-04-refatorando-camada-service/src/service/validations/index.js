const { validateLicensePlate, validateExistCar } = require('./validationsDb');
const { validateNewCar, validateNewTravel, validateNewDriver } = require('./validationInputs');

module.exports = {
  validateLicensePlate,
  validateNewCar,
  validateExistCar,
  validateNewTravel,
  validateNewDriver,
};