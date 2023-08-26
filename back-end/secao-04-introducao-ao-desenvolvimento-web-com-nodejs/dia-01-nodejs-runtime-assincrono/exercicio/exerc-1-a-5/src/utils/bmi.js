/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
const measure = {
  m: 1,
  cm: 100,
};

const getBmiStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight (thin)';
  if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
  if (bmi >= 25 && bmi < 30) return 'Overweight';
  if (bmi >= 30 && bmi < 35) return 'Obesity grade I';
  if (bmi >= 35 && bmi < 40) return 'Obesity grade II';
  if (bmi >= 40) return 'Obesity grade III e IV';
  return 'Invalid BMI';
};

const getBmi = (weight, height, measurement = 'm') => {
  const lowerMeasurement = measurement.toLowerCase();
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