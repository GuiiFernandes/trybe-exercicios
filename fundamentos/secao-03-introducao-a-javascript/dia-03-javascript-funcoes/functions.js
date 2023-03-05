// Requisito 1 - Crie a função verificaPalindromo

function verificaPalindromo(word) {
  let newWord = '';
  for (index = word.length - 1; index >= 0; index -= 1) {
    newWord += word[index];
  }
  return newWord === word;
}

// Requisito 2 - Crie a função indiceDoMaior

function indiceDoMaior(array) {
  let biggest = array[0];
  for (let num of array) {
    if (num > biggest) biggest = num;
  }
  return array.indexOf(biggest);
}

// Requisito 3 - Crie a função indiceDoMenor

function indiceDoMenor(array) {
  let smaller = array[0];
  for (index = 1; index < array.length; index += 1) {
    if (array[index] < smaller) smaller = array[index];
  }
  return array.indexOf(smaller);
}

// Requisito 4 - Crie a função maiorPalavra

function maiorPalavra(array) {
  let biggestWord = array[0];
  for (let word of array) {
    if (biggestWord.length < word.length) biggestWord = word;
  }
  return biggestWord;
}

// Requisito 5 - Crie a função maisRepetido

function countRepeat(index, array) {
  let amountRepetition = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (array[index] === array[secondIndex]) amountRepetition += 1;
  }
  return amountRepetition;
}

function maisRepetido(array) {
  let mostRepeatedNumber = array[0];
  let higherRepetition = 0;
  let amountRepetition;
  for (let index = 0; index < array.length; index += 1) {
    amountRepetition = countRepeat(index, array);
    if (amountRepetition > higherRepetition && mostRepeatedNumber !== array[index]) {
      higherRepetition = amountRepetition;
      mostRepeatedNumber = array[index];
    }
  }
  return mostRepeatedNumber;
}

// Requisito 6 - Crie a função somatorio

function somatorio(number) {
  if (number < 0 && typeof (number) !== 'number') return 'ERRO';
  for (index = number - 1; index >= 1; index -= 1) {
    number += index;
  }
  return number;
}

// Requisito 7 - Crie a função verificaFimPalavra

function verificaFimPalavra(word, endWord) {
  return word.slice(-endWord.length) === endWord;
}