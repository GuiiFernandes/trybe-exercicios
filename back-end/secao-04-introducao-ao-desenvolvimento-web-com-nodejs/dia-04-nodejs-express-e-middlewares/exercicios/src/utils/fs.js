const fs = require('fs').promises;
const path = require('path');

const PATH = path.resolve(__dirname, '../../data/data.json');

const read = async () => {
  const data = await fs.readFile(PATH, 'utf-8');
  return JSON.parse(data);
};

const write = async (data) => {
  await fs.writeFile(PATH, JSON.stringify(data));
};

module.exports = {
  read,
  write,
};