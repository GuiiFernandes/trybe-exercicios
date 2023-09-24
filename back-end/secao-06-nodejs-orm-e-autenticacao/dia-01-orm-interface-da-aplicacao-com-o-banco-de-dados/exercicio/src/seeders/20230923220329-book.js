'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [
      {
        title: 'O Senhor dos Anéis',
        author: 'J. R. R. Tolkien',
        page_quantity: 1000,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('books', null, {}),
};
