const { question } = require('readline-sync');

const math = (a, b, c) => new Promise((resolve, reject) => {
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
      reject(new Error('Informe apenas números'));
    }
    const result = (a + b) * c;
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });

(async () => {
  try {
    const a = Number(question('Digite o primeiro valor: '));
    const b = Number(question('Digite o segundo valor: '));
    const c = Number(question('Digite o terceiro valor: '));
    const result = await math(a, b, c);
    console.log(result);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
})();