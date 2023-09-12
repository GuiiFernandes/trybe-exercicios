const Joi = require('joi');

const yearNow = new Date().getFullYear();
const yearMin = yearNow - 10;
console.log(yearMin);

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number()
    .integer()
    .min(yearMin)
    .max(yearNow + 1),
  driverId: Joi.number().integer(),
});

const idSchema = Joi.number().integer().min(1);
const pointSchema = Joi.string().min(3);
const waypointsSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1),
});

const addRequestTravelSchema = Joi.object({
  passagerId: idSchema,
  startingAddress: pointSchema,
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointsSchema),
});

module.exports = {
  addCarSchema,
  addRequestTravelSchema,
};
