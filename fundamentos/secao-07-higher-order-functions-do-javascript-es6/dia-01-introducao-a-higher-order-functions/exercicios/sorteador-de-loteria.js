// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
const winner = (bet, drawn) => drawn === bet;

const raffle = (bet, winner) => {
  const drawn = Math.round(Math.random() * (5 - 1) + 1);
  return winner(bet, drawn) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(raffle(3, winner));