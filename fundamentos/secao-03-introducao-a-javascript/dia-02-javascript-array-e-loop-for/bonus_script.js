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

console.log(' ');
//5.
n = 5;
for (index = 1; index <= n; index += 1) {
  linha='';
  for (secondIndex = 1; secondIndex <= index; secondIndex += 1) {
    linha += '*';
  }
  console.log(linha);
}

console.log(' ');
//6.
n = 5;
let cont = 5;
for (index = 1; index <= n; index += 1) {
  linha='';
  for (secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    if (secondIndex >= cont) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  cont -= 1;
  console.log(linha);
}

console.log(' ');
//7.
n = 5;
let countLeft = 3;
let countRight = 3;
for (index = 1; index <= 3; index += 1) {
  linha = '';
  for (secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    if (secondIndex >= countLeft && secondIndex <= countRight) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  countLeft -= 1;
  countRight += 1;
  console.log(linha);
}

console.log(' ');
//8.
n = 7;
countLeft = 4;
countRight = 4;
for (index = 1; index <= 4; index += 1) {
  linha = '';
  for (secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    if (secondIndex === countLeft || secondIndex === countRight || index === 4) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  countLeft -= 1;
  countRight += 1;
  console.log(linha);
}

//9.
let numAnalyzed = 7;
let isPrime = true;
for (let index = 2; index <= numAnalyzed - 1; index += 1) {
  if (numAnalyzed % index === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(`O número ${numAnalyzed} é primo.`);
} else {
  console.log(`O número ${numAnalyzed} não é primo.`);
}