const { question, questionInt } = require('readline-sync');

const { readData, writeData } = require('./utils/fs');

const insertNewData = async () => {
  const oldData = await readData();
  const id = oldData.length + 1;
  const name = question('Qual o nome da expedição? ');
  const year = questionInt('Qual o ano da expedição? ');
  const country = question('Qual o países participaram da expedição? ');
  const destination = question('Qual o destino da expedição? ');

  await writeData([
    ...oldData,
    { id, name, year, country, destination },
  ]);
};

insertNewData();