const { validateLicensePlate, validateExistCar } = require('./validationsDb');
const { validateNewCar, validateNewTravel } = require('./validationInputs');

module.exports = {
  validateLicensePlate,
  validateNewCar,
  validateExistCar,
  validateNewTravel,
};