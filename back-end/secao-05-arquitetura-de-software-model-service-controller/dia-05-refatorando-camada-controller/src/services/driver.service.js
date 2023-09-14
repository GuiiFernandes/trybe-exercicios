const validates = require('./validations');
const { genericCruds } = require('../models');
const response = require('../utils/serviceResponses');

const getAllDrivers = async ({ table }) => {
  const drivers = await genericCruds.findAll({ table });
  return response({ drivers, message: 'Drivers found successfully' }).SUCCESS;
};

const getDriverById = async ({ table, id }) => {
  const [driver] = await genericCruds.findById({ table, id });
  if (!driver) return response({ message: 'Drivers not found' }).NOT_FOUND;
  return response({ driver, message: 'Driver found successfully' }).SUCCESS;
};

const createDriver = async ({ table, data }) => {
  const error = validates.validateNewDriver(data);
  if (error) return error;
  const driver = await genericCruds.create({ table, data });
  if (!driver) return response({ message: 'Driver not created' }).BAD_REQUEST;
  return response({ driver, message: 'Driver created successfully' }).CREATED;
};

module.exports = {
  getAllDrivers,
  getDriverById,
  createDriver,
};