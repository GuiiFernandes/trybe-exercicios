const validateLicensePlate = (licensePlate) => {
  const regex = /^[A-Z]{3}[0-9]{4}$/;
  const regex2 = /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/;
  return regex.test(licensePlate) || regex2.test(licensePlate);
};

module.exports = {
  validateLicensePlate,
};