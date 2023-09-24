const { Op } = require('sequelize');
const { Book } = require('../models');
const response = require('../utils/responses');

const getAll = async () => {
  const result = await Book.findAll({ order: [['title', 'ASC']] });
  if (!result.length) return response({ message: 'There are no books registered' }).NOT_FOUND;
  return response({ message: 'Book found successfully', books: result }).SUCESSFUL;
};

const getById = async (id) => {
  const result = await Book.findByPk(id);
  if (!result) return response({ message: 'Book not found' }).NOT_FOUND;
  return response({ message: 'Book found successfully', book: result }).SUCESSFUL;
};

const create = async (book) => {
  const result = await Book.create(book);
  return response({ message: 'Book created successfully', book: result }).CREATED;
};

const update = async (id, book) => {
  const affectedRows = await Book.update(book, { where: { id } });
  if (!affectedRows) return response({ message: 'Book not found' }).NOT_FOUND;
  const result = await Book.findByPk(id);
  return response({ message: 'Book updated successfully', book: result }).SUCESSFUL;
};

const remove = async (id) => {
  const result = await Book.destroy({ where: { id } });
  if (!result) return response({ message: 'Book not found' }).NOT_FOUND;
  return response({ message: 'Book deleted successfully' }).NO_CONTENT;
};

const getByAuthor = async (author) => {
  const result = await Book.findAll({
    where: { author: { [Op.like]: `%${author}%` } },
    order: [['title', 'ASC']],
  });
  if (!result.length) return response({ message: 'Book not found' }).NOT_FOUND;
  return response({ message: 'Book found successfully', book: result }).SUCESSFUL;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};