const hydrate = (string) => {
  const arrayString = string.split(' ');
  let sum = 0;
  for (let index = 0; index < arrayString.length; index += 1) {
    if (!Number.isNaN(Number(arrayString[index]))) sum += Number(arrayString[index]);
  }
  return `${sum} copo${sum > 1 ? 's' : ''} de água`;
};
hydrate('2 cervejas, 2 shots e 3 tequilas!');

module.exports = hydrate;
