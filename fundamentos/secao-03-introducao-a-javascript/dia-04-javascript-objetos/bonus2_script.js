//1.
function convertNumber (romeNum) {
  const romeNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0;
  for (let index = 0; index < romeNum.length; index += 1) {
    romeNumbers[romeNum[index]] >= romeNumbers[romeNum[index + 1]] || romeNum[index + 1] === undefined ? result += romeNumbers[romeNum[index]] : result -= romeNumbers[romeNum[index]];
  }
  return result
}

console.log(convertNumber('IX'), convertNumber('XI'), convertNumber('LXXVIII'), convertNumber('LXIII'));

//2.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayofNumbers (vector) {
  const evenNumbers = [];
  for (let secondVector of vector) {
    for (let num of secondVector) {
      num % 2 === 0 && evenNumbers.push(num);
    }
  }
  return evenNumbers;
}
console.log(arrayofNumbers(vector));

//3.
let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
const basketObj = {};
for (let fruit of basket) {
  let existFruit = false;
  for (let key in basketObj) {
    if (fruit === key) {
      existFruit = true;
      continue;
    }
  }
  existFruit ? basketObj[fruit] += 1 : basketObj[fruit] = 1;
}
let result = `Sua cesta possui:`;
for (let key in basketObj) {
  result += ` ${basketObj[key]} ${key},`;
}
result = result.slice(0, -1);
result += `.`;
console.log(result);