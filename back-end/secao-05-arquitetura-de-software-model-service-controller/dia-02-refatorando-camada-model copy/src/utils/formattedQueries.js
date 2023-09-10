const snakeize = require('snakeize');

const getFields = (data) => {
  const fields = (Object.keys(snakeize(data)));
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