const { validateNewCar } = require('./validations/validationInputs');
const { genericCruds } = require('../models');

const createCar = async ({ table, newCar }) => {
  const erro = validateNewCar(newCar);
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
