// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (statusMotor) => {
  statusMotor = statusMotor === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${statusMotor}`);
  return statusMotor;
};
ligarDesligar('ligado');

// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (radius) => {
  if (typeof radius !== 'number') return 'O parâmetro radius deve ser um número';
  const pi = Math.PI.toFixed(2);
  const area = pi * radius ** 2;
  return `Essa é a área do círculo: ${area}`;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (phrase) => {
  const words = phrase.split(' ');
  return words.reduce((biggestWord, value) =>
    (value.length > biggestWord.length ? value : biggestWord), words[0]);
};