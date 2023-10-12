const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

const getAll = async () => JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));

const write = async (content) => fs.writeFile(DATA_PATH, JSON.stringify(content));

const findOne = async (username) => {