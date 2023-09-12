const { carModel } = require('../../models');

const validateLicensePlate = (licensePlate) => {
  const regex = /[A-Z]{3}[0-9]{4}$/;
  const regex2 = /[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/;
  if (!(regex.test(licensePlate) || regex2.test(licensePlate))) {
    return {
      status: 400,
      message: '"licensePlate" must be in the format "AAA0000" or "AAA0A00"',
    };
  }
};

const validateExistCar = async (licensePlate) => {
  const licensePlateExist = await carModel.findByLicensePlate(licensePlate);
  if (licensePlateExist) return { status: 409, message: 'Car already exists' };
};

module.exports = {
  validateLicensePlate,
  validateExistCar,
};