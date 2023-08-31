const existingId = (req, res, next) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) return res.status(400).json({ message: 'Invalid ID!' });
  next();
};

module.exports = {existingId};