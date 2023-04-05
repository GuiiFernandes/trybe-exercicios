// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumpair1 = (array) => array.filter((value) => value % 2 === 0).reduce((sum, value) => sum + value);
console.log(sumpair1(numbers));

const sumpair2 = (array) => array.reduce((sum, value) => value % 2 === 0 ? sum + value : sum);
console.log(sumpair2(numbers));
