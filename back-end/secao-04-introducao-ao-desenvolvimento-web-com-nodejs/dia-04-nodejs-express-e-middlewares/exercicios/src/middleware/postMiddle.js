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
  if (!price) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (Number.isNaN(Number(price) || Number(price) < 0)) { 
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    }); 
  }
  next();
};

module.exports = {
  nameValidate,
  priceValidate,
};