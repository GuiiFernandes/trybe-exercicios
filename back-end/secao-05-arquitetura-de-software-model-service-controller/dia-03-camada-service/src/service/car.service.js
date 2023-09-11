const validates = require('./validations');
const { genericCruds } = require('../models');

const createCar = async ({ table, newCar }) => {
  let erro = validates.validateNewCar(newCar);
  if (erro) return { status: erro.status, data: { message: erro.message } };
  erro = validates.validateLicensePlate(newCar.licensePlate);
  if (erro) return { status: erro.status, data: { message: erro.message } };
  erro = await validates.validateExistCar(newCar.licensePlate);
  if (erro) return { status: erro.status, data: { message: erro.message } };
  const [driver] = await genericCruds.findById({ table: 'drivers', id: newCar.driverId });
  if (!driver) return { status: 400, data: { message: 'Driver not found' } };
  const car = await genericCruds.create({ table, data: newCar });
  return {
    status: 201,
    data: { car, message: 'Car created successfully' },
  };
};

const getAllCars = async ({ table }) => {
  const cars = await genericCruds.findAll({ table });
  return {
    status: 200,
    data: cars,
  };
};

module.exports = {
  createCar,
  getAllCars,
};
