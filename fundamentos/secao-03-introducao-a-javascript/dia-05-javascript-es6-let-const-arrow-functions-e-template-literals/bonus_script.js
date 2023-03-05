const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const arrayFrase = frase.split(' ');
  for (let palavra of arrayFrase) {
    if (palavra === 'x') palavra = nome;
  }
  return arrayFrase.join(' ');
};

const minhasSkills = frase => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let result = `${frase}
Minhas três principais habilidades são:`;
  for (let value of skills) {
    result += `
  - ${value}`;
  }
  return result;
}
console.log(minhasSkills(substituaX('Guilherme')));