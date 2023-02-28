let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

//1.
console.log('1. Valores do array: [');
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  //2.
  sum += numbers[index];
}
console.log(']');

console.log(`2. Soma dos valores do array: ${sum}`);
//3.
let average = sum/numbers.length
console.log(`3. Média dos valores do array: ${average}`);