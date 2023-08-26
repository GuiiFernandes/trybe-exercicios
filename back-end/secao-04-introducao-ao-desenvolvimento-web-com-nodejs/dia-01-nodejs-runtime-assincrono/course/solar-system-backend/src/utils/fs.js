const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '../../data/data.json');

const readData = async () => {
  try {
    const data = await readFile(DATA_PATH);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
};

const writeData = async (data) => {
  try {
    await writeFile(DATA_PATH, JSON.stringify(data));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error.message}`);
  }
};

module.exports = {
  readData,
  writeData,
};
