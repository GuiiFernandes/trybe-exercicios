const fs = require('fs').promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const promiseAll = async (array) => {
  const createFilePromises = array
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
  await Promise.all(createFilePromises);

  const filesContent = await Promise.all(array.map(async (string, index) => fs
    .readFile(`./file${index + 1}.txt`, 'utf-8')));
  
  await fs.writeFile('./fileAll.txt', filesContent.join(' ').replace(' !', '!'));
};

promiseAll(strings);