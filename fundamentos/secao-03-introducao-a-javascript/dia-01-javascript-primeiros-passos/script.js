//1. EXERCÍCIO DO DIA
let a = 5;
let b = 10;

console.log(`Soma :${a + b}`);
console.log(`Subtração :${a - b}`);
console.log(`Multiplicação :${a * b}`);
console.log(`Divisão :${a / b}`);
console.log(`Módulo :${a % b}`);

//2. EXERCÍCIO DO DIA
let maior;

if (a > b) {
  maior = a;
} else {
  maior = b;
}

console.log(`O maior é ${maior}`);

//3. EXERCÍCIO DO DIA
 let c = 40;

if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}

console.log(`O maior é ${maior}`);

//4. EXERCÍCIO DO DIA
let d = -10;

if (d > 0) {
  console.log('positive');
} else if (d < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

//5. EXERCÍCIO DO DIA
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