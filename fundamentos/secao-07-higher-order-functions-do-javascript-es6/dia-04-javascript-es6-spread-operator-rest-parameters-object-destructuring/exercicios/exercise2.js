//2. Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.
const sum = (...numbers) => numbers.reduce((sum, number) => sum + number);
console.log(sum(4, 5, 6));