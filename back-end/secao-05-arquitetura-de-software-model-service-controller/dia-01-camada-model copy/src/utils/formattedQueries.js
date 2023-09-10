const snakeize = require('snakeize');

const getFields = (data) => {
  const fields = snakeize(Object.keys(data));
  const stringFields = fields.join(', ');
  return stringFields;
};

const getPlaceholders = (data) => {
  const values = Object.values(data);
  const stringValues = values.map((_value) => '?').join(', ');
  return stringValues;
};

module.exports = {
  getFields,
  getPlaceholders,
};