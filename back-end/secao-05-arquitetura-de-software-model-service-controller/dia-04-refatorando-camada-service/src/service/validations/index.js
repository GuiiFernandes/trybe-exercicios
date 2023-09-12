const { validateLicensePlate, validateExistCar } = require('./validationLicensePlate');
const { validateNewCar } = require('./validationInputs');

module.exports = {
  validateLicensePlate,
  validateNewCar,
  validateExistCar,
};