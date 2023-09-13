const validates = require('./validations');
const { genericCruds } = require('../models');
const response = require('../utils/serviceResponses');

const validateCarData = async (newData) => {
  let error = validates.validateNewCar(newData);
  if (error) return error;
  error = validates.validateLicensePlate(newData.licensePlate);
  if (error) return error;
  const [driver] = await genericCruds.findById({ table: 'drivers', id: newData.driverId });
  if (!driver) return response({ message: 'Driver not found' }).BAD_REQUEST;
};

const createCar = async ({ table, newCar }) => {
  let error = await validateCarData(newCar);
  if (error) return error;
  error = await validates.validateExistCar(newCar.licensePlate);
  if (error) return error;
  const car = await genericCruds.create({ table, data: newCar });
  if (!car) return response({ message: 'Car not created' }).BAD_REQUEST;
  return response({ car, message: 'Car created successfully' }).CREATED;
};

const getAllCars = async ({ table }) => {
  const cars = await genericCruds.findAll({ table });
  return response({ cars, message: 'Cars found successfully' }).SUCCESS;
};

const getCarById = async ({ table, id }) => {
  const [car] = await genericCruds.findById({ table, id });
  if (!car) return response({ message: 'Car not found' }).NOT_FOUND;
  return response({ car, message: 'Car found successfully' }).SUCCESS;
};

const updateCar = async ({ table, id, newData }) => {
  const erro = await validateCarData(newData);
  if (erro) return erro;
  const isUpdate = await genericCruds.update({ table, id, newData });
  if (!isUpdate) return response({ message: 'Car not found' }).NOT_FOUND;
  const body = {
    car: { id, ...newData },
    message: 'Car updated successfully',
  };
  return response(body).SUCCESS;
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
};
