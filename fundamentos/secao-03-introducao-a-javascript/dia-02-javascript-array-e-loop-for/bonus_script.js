//1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
  for (let index = 0; index < secondIndex; index += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);