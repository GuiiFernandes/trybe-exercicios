let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let biggerNum = null;
let numOfOdd = 0;
let smallerNum;

//1.
console.log('1. Valores do array: [');
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  //2.
  sum += numbers[index];
  //5.
  if (numbers[index] > biggerNum) {
    biggerNum = numbers[index];
  }
  //6.
  if (numbers[index] % 2 !== 0) {
    numOfOdd += 1;
  }
  //7.
  if (numbers[index] < smallerNum || smallerNum === undefined) {
    smallerNum = numbers[index];
  }
}
console.log(']');

console.log(`2. Soma dos valores do array: ${sum}`);
//3.
let average = sum/numbers.length
console.log(`3. Média dos valores do array: ${average}`);
//4.
console.log(average > 20 ? '4. Valor maior que 20' : '4. Valor menor ou igual a 20');
console.log(`5. Maior núemro do array: ${biggerNum}`);
console.log(average > 20 ? `6. Quantida de ímpares: ${numOfOdd}` : '6. Nenhum valor ímpar encontrado');
console.log(`7. Menor núemro do array: ${smallerNum}`);