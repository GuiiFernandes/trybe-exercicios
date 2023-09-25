const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books' }],
});

module.exports = {
  getUsersBooksById,
};