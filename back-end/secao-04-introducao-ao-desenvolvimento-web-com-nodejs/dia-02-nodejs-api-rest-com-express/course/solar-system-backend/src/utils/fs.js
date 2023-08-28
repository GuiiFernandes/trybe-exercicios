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
    const db = await readData();
    const newDb = [...db, { id: db[db.length - 1] + 1, ...data }];
    await writeFile(DATA_PATH, JSON.stringify(newDb));
    console.log('Arquivo escrito com sucesso!');
    return newDb;
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error.message}`);
  }
};

const updateData = async (id, data) => {
  const db = await readData();
  const index = db.findIndex((mission) => mission.id === id);
  if (index === -1) return null;
  db[index] = { id, ...data };
  await writeFile(DATA_PATH, JSON.stringify(db));
  console.log('Arquivo atualizado com sucesso!');
  return db;
};

module.exports = {
  readData,
  writeData,
  updateData,
};
