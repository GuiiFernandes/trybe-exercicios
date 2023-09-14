const response = require('./serviceResponses');

const checkReqFields = (receivedFields, requiredFields) => {
  for (let index = 0; index < requiredFields.length; index += 1) {
    const field = requiredFields[index];
    if (!(receivedFields[field] in receivedFields)) {
      return response({ message: `${field} is missing` }).BAD_REQUEST;
    }
  }
};

module.exports = checkReqFields;