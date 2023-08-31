const { question, questionInt } = require('readline-sync');

const { writeData } = require('./utils/fs');

const insertNewData = async () => {
  const name = question('Qual o nome da expedição? ');
  const year = questionInt('Qual o ano da expedição? ');
  const country = question('Qual o países participaram da expedição? ');
  const destination = question('Qual o destino da expedição? ');

  await writeData({ name, year, country, destination });
};

insertNewData();