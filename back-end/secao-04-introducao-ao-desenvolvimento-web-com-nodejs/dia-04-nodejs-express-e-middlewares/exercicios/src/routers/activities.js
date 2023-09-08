const express = require('express');
const { read, write } = require('../utils/fs');
const { nameValidate, priceValidate, descriptionValidate, createdAtValidate,
  ratingValidate, difficultyValidate, tokenValidate } = require('../middlewares/acitivitiesMiddle');

const router = express.Router();

router.use(tokenValidate);
router.use(nameValidate);
router.use(priceValidate);
router.use(descriptionValidate);
router.use(ratingValidate);
router.use(difficultyValidate);
router.use(createdAtValidate);

router.post('/', async (req, res) => {
  const activity = req.body;
  const content = await read();
  const id = content[content.length - 1] ? content[content.length - 1].id + 1 : 1;
  content.push({ id, ...activity });
  await write(content);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;