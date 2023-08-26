const { questionFloat, question } = require('readline-sync');

const getBmi = require('./utils/bmi');

const weight = questionFloat('What is your weight (Kg)? ');
const height = questionFloat('What is your height? ');
let measurement = question('What is the height measurement (cm or m)? ');
if (!measurement) measurement = null;

getBmi(weight, height, measurement);