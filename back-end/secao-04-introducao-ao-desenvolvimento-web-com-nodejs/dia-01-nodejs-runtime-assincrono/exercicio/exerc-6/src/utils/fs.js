const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const dataPath = path.resolve(__dirname, '../../data');

const readData = async (file = 'simpsons') => {
  try {
    const data = await readFile(`${dataPath}/${file}.json`);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
};

const writeData = async (data, file = 'simpsons') => {
  try {
    await writeFile(`${dataPath}/${file}.json`, JSON.stringify(data));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error.message}`);
  }
};

module.exports = {
  readData,
  writeData,
};