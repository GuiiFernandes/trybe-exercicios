const measure = {
  m: 1,
  cm: 100,
};

const BMI_MAX_AND_MIN = {
  Underweight: { minBMI: 0, maxBMI: 18.4 },
  'Normal Weight': { minBMI: 18.5, maxBMI: 24.9 },
  Overweight: { minBMI: 25, maxBMI: 29.9 },
  'Obese Class I': { minBMI: 30.0, maxBMI: 34.9 },
  'Obese Class II': { minBMI: 35, maxBMI: 39.9 },
  'Obese Class III': { minBMI: 40, maxBMI: 100 },
};

const getBmiStatus = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN);
  return statuses.find((status) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  });
};

const getBmi = (weight, height, measurement = 'm') => {
  const lowerMeasurement = measurement.toLowerCase();
  console.log(measurement, lowerMeasurement);
  const bmi = weight / (height / measure[lowerMeasurement]) ** 2;
  const bmiStatus = getBmiStatus(bmi);
  console.log(`
  Results:
  Weight: ${weight}Kg, Height: ${height}${lowerMeasurement}
  BMI: ${bmi.toFixed(2)}, Status: ${bmiStatus}
  `);
};

getBmi(71, 1.69, 'M');

module.exports = getBmi;