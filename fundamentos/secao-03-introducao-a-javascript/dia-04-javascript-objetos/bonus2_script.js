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