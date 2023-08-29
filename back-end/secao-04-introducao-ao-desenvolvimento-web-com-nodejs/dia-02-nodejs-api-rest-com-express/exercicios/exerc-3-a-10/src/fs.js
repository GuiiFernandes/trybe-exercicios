const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const DATA_PATH = path.resolve(__dirname, './movies.json');

const readData = async () => {
  const data = await readFile(DATA_PATH);
  return JSON.parse(data);
};

const writeData = async (data) => {
  try {
    await writeFile(DATA_PATH, JSON.stringify(data));
    return data;
  } catch (error) {
    return `Error writing to file: ${error.message}`;
  }
};

const updateData = async (id, data) => {
  const db = await readData();
  const index = db.findIndex((movie) => movie.id === id);
  if (index === -1) return null;
  db[index] = { id, ...data };
  await writeFile(DATA_PATH, JSON.stringify(db));
  return db;
};

const deleteData = async (id) => {
  const db = await readData();
  const index = db.findIndex((movie) => movie.id === id);
  if (index === -1) return null;
  db.splice(index, 1);
  await writeFile(DATA_PATH, JSON.stringify(db));
  return db;
};

const searchMovie = async (q) => {
  const db = await readData();
  const result = db.filter(({movie}) => movie.toLowerCase().includes(q.toLowerCase()));
  if (result.length === 0) return null;
  return result;
};

module.exports = {
  readData,
  writeData,
  updateData,
  deleteData,
  searchMovie,
};