const Book = require('../services/books.service');

const getAll = async (req, res) => {
  const { author } = req.query;
  let data;
  if (author) {
    data = await Book.getByAuthor(author);
  } else {
    data = await Book.getAll();
  }
  res.status(data.status).json(data.body);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await Book.getById(id);
  res.status(data.status).json(data.body);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const data = await Book.create({ title, author, pageQuantity, publisher });
  res.status(data.status).json(data.body);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  const data = await Book.update(id, { title, author, pageQuantity, publisher });
  res.status(data.status).json(data.body);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const data = await Book.remove(id);
  res.status(data.status).json(data.body);
};

const getByAuthor = async (req, res) => {
  const { author } = req.query;
  const data = await Book.getByAuthor(author);
  res.status(data.status).json(data.body);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};