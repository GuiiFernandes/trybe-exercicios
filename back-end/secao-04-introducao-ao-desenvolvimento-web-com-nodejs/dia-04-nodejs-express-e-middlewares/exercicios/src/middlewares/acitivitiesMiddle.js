const difficulties = ['Fácil', 'Médio', 'Difícil'];

const nameValidate = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 4) { 
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 4 caracteres' }); 
  }
  next();
};

const priceValidate = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) { 
    return res.status(400).json({ message: 'O campo "price" é obrigatório' }); 
  }
  if (Number.isNaN(Number(price) || Number(price) < 0)) { 
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    }); 
  }
  next();
};

const descriptionValidate = (req, res, next) => {
  const { description } = req.body;
  if (!description) return res.status(400).json({ message: 'O campo "description" é obrigatório' });
  const descriptionKeys = Object.keys(description);
  if (descriptionKeys.length !== 3 || typeof description !== 'object') {
    return res.status(400).json({
        message: 'O campo "description" deve ter um formato válido',
      }); 
  }
  next();
};

const validDate = (date) => {
  const conditionFormat = date[2] === '/' && date[5] === '/' && date.length === 10;
  return (conditionFormat && !Number.isNaN(new Date(date).getTime()));
};

const createdAtValidate = (req, res, next) => {
  const { description: { createdAt } } = req.body;
  if (!createdAt) return res.status(400).json({ message: 'O campo "createdAt" é obrigatório' });
  if (!validDate(createdAt)) {
    return res.status(400).json({
      message: 'O campo "createdAt" deve ter o formato "dd/mm/aaaa"',
    }); 
  }
  next();
};

const ratingValidate = (req, res, next) => {
  const { description: { rating } } = req.body;
  if (!rating) return res.status(400).json({ message: 'O campo "rating" é obrigatório' });
  if (!Number.isInteger(rating) && rating < 1 && rating > 5) {
    return res.status(400).json({
      message: 'O campo "rating" deve ser um inteiro de 1 à 5',
    });
  }
  next();
};

const difficultyValidate = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  if (!difficulty) return res.status(400).json({ message: 'O campo "difficulty" é obrigatório' });
  if (!difficulties.includes(difficulty)) {
    return res.status(400).json({
      message: 'O campo difficulty deve ser "Fácil", "Médio" ou "Difícil"',
    });
  }
  next();
};

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  next();
};

module.exports = {
  nameValidate,
  priceValidate,
  descriptionValidate,
  createdAtValidate,
  ratingValidate,
  difficultyValidate,
  tokenValidate,
};