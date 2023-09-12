const Joi = require('joi');

const yearNow = new Date().getFullYear();
const yearMin = yearNow - 10;

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer().min(yearMin).max(yearNow + 1),
  driverId: Joi.number().integer(),
});

module.exports = {
  addCarSchema,
};
