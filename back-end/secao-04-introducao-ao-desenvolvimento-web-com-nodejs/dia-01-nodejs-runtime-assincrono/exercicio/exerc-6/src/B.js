const { question } = require('readline-sync');

const { readData } = require('./utils/fs');

const getCharactersId = async (id) => {
  const data = await readData();
  const charData = data.find((character) => character.id === id);
  return new Promise((resolve, reject) => {
    if (!charData) reject(new Error('id não encontrado'));
    resolve(charData);
  });
};

(async () => {
  try {
    const id = question('Digite o id do personagem: ');
    const character = await getCharactersId(id);
    console.log(character); 
  } catch (error) {
    console.log(error.message);
  }
})();
