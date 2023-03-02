//1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  for (let compare = index + 1; compare < numbers.length; compare += 1) {
    if (numbers[index] > numbers[compare]) {
      let position = numbers[compare];
      numbers[compare] = numbers[index];
      numbers[index] = position;
    }
  }
}
console.log(numbers);

//2.
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  for (let compare = index + 1; compare < numbers.length; compare += 1) {
    if (numbers[index] < numbers[compare]) {
      let position = numbers[compare];
      numbers[compare] = numbers[index];
      numbers[index] = position;
    }
  }
}
console.log(numbers);

//3.
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let index=0; index < numbers.length; index += 1) {
  if (index !== numbers.length - 1) {
    newNumbers.push(numbers[index] * numbers[index + 1]);
  } else {
    newNumbers.push(numbers[index] * 2);
  }
}

console.log(newNumbers);

//4.
let n = 5;
let linha;
for (index = 1; index <= n; index += 1) {
  linha='';
  for (secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    linha += '*';
  }
  console.log(linha);
}