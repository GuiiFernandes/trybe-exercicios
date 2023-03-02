let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let biggerNum = numbers[0];
let numOfOdd = 0;
let smallerNum = numbers[0];

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
  if (numbers[index] < smallerNum) {
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
console.log(numOfOdd > 0 ? `6. Quantida de ímpares: ${numOfOdd}` : '6. Nenhum valor ímpar encontrado');
console.log(`7. Menor núemro do array: ${smallerNum}`);

//8.
let countNumbers = [];
for (let counter = 1; counter <= 25; counter += 1) {
  countNumbers.push(counter);
  
}
console.log('8.', countNumbers);

//9.
console.log('9. Números divididos por 2: [');
for (let num of countNumbers) {
  console.log(num / 2);
}
console.log(']');

//10.
let factorial = 10;

for (let num = factorial-1; num >= 1; num -= 1) {
  factorial *= (num);
}
console.log('10. Fatorial de 10:', factorial);

//11.
let word = 'Guilherme';
let invertedWord = '';

for (let index = (word.length-1); index >= 0; index -= 1) {
  invertedWord += word[index];
}
console.log('11. Palavra invertida:',invertedWord);

//12.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = '';
let smallerWord = '';

for (let word of array) {
  if (word.length > biggerWord.length) {
    biggerWord = word;
  }
  if (word.length < smallerWord.length || array.indexOf(word) === 0) {
    smallerWord = word;
  }
}
console.log(`12. Maior palavra: ${biggerWord}, menor palavra: ${smallerWord}`);