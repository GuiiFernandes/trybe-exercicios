const response = require('../utils/serviceResponses');

const requestTravel = async (travelData) => {
  // valida dados de entrada (Joi);
  return response({ message: erro.message }).BAD_REQUEST;
  // Valida se passageiro existe (findById);
  return response({ message: erro.message }).BAD_REQUEST;
  // Grava solicitação no banco (create);
  return response({ travel, message: 'Travel created successfully' }).CREATED;
};