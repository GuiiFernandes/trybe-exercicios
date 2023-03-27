const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  const sortedArray = array.sort();
  const arrayObj = [];
  for (let index = 0; index < array.length; index += 1) {
    arrayObj.push({ tech: sortedArray[index], name });
  }
  return arrayObj;
};

module.exports = techList;
