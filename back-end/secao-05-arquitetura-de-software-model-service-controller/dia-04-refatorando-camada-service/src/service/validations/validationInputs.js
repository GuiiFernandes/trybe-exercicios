const { addCarSchema } = require('./schemas');

const validateNewCar = (newCar) => {
  const { error } = addCarSchema.validate(newCar);
  if (error) return { status: 400, message: error.message };
};

module.exports = {
  validateNewCar,
};