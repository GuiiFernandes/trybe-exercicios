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