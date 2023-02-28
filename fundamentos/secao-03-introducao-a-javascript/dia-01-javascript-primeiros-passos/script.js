//1.
let a = 5;
let b = 10;

console.log(`Soma :${a + b}`);
console.log(`Subtração :${a - b}`);
console.log(`Multiplicação :${a * b}`);
console.log(`Divisão :${a / b}`);
console.log(`Módulo :${a % b}`);

//2.
let maior;

if (a > b) {
  maior = a;
} else {
  maior = b;
}

console.log(`O maior é ${maior}`);

//3.
 let c = 40;

if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}

console.log(`O maior é ${maior}`);

//4.
let d = -10;

if (d > 0) {
  console.log('positive');
} else if (d < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

//5.
let angleA = 60;
let angleB = 90;
let angleC = 15;

let sumAngle = angleA + angleB + angleC;
let allAnglePositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglePositive) {
  if ( sumAngle === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Existe ângulo(s) com valor(es) negativo(os)!');
}

//6.
let part = 'xablau';
let move;

switch (part.toLowerCase()) {
  case 'peão':
    move = 'uma casa pra frente (duas no primeiro movimento).';
    break;
  case 'bispo':
    move = 'diagonais livres.';
    break;
  case 'torre':
    move = 'vertical e horizontal por todas as casas não ocupadas.';
    break;
  case 'cavalo':
    move = 'duas casas horizontal ou vertical e uma casa a mais em um ângulo reto (única peça que pula outras).';
    break;
  case 'rainha':
    move = 'na horizontal, vertical ou Diagonais livres.';
    break;
  case 'rei':
    move = 'para qualquer casa adjascente.';
    break;
  default:
    move = false;
    break;
}

move === false ? console.log('Erro, peça inválida!') : console.log(`${part} move-se ${move}`);

//7.
let gradePercent = 70;
let gradeLetter;

if (gradePercent < 0 || gradePercent > 100 || typeof(gradePercent) !== 'number') {
  console.log('Erro, nota inválida!');
} else {
  if (gradePercent >=90) {
    gradeLetter = 'A';
  } else if (gradePercent >=80) {
    gradeLetter = 'B';
  } else if (gradePercent >=70) {
    gradeLetter = 'C';
  } else if (gradePercent >=60) {
    gradeLetter = 'D';
  } else if (gradePercent >=50) {
    gradeLetter = 'E';
  } else if (gradePercent < 50) {
    gradeLetter = 'F';
  }
  console.log(gradeLetter);
}

//8.
let num1 = 3;
let num2 = 10;
let num3 = 17;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//9.
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}