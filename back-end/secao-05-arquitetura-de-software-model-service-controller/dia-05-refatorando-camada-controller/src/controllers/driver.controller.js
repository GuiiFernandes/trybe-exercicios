const { travelService, driverService } = require('../services');

const table = 'drivers';

const findOpensTravels = async (req, res) => {
  const { status, data } = await travelService.getOpenTravels();
  return res.status(status).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await driverService.getAllDrivers({ table });
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await driverService.getDriverById({ table, id });
  return res.status(status).json(data);
};

const createDriver = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await driverService.createDriver({ table, data: { name } });
  return res.status(status).json(data);
};

module.exports = {
  findOpensTravels,
  findAll,
  findById,
  createDriver,
};