const { questionInt } = require('readline-sync');

(() => {
  try {
    const n = questionInt('Digite um número inteiro maior que 0: ');
    if (n <= 0 || n - Math.floor(n) !== 0) throw new Error('Enter an integer greater than 0');
    let fibo = 1;
    let sum = 1;
    console.log(fibo);
    for (let i = 1; i < n; i += 1) {
      console.log(fibo);
      const temp = fibo;
      fibo += sum;
      sum = temp;
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
})();