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
    if (romeNumbers[romeNum[index]] >= romeNumbers[romeNum[index + 1]] || romeNum[index + 1] === undefined) {
      result += romeNumbers[romeNum[index]];
    } else {
      result -= romeNumbers[romeNum[index]];
    };
  }
  return result
}

console.log(convertNumber('IX'), convertNumber('XI'), convertNumber('LXXVIII'), convertNumber('LXIII'));