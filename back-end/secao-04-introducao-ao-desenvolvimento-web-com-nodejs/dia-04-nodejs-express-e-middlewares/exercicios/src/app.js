const express = require('express');

const { read, write } = require('./utils/fs');
const { nameValidate, priceValidate } = require('./middleware/postMiddle');

const app = express();

app.use(express.json());

app.use(nameValidate);
app.use(priceValidate);

app.post('/activities', async (req, res) => {
  const activity = req.body;
  console.log(activity);
  const content = await read();
  const id = content[content.length - 1] ? content[content.length - 1].id + 1 : 1;
  content.push({ id, ...activity });
  await write(content);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;

// Parei no 6. do exercicio 1 dia 4.4
