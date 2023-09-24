// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// const BooksModel = require('../../../src/models/books.model');

// describe('Teste Unitário - Books Model', function () {
//   const Books = BooksModel(sequelize, dataTypes);
//   const books = new Books();

//   it('Possui o nome "books"', function () {
//     checkModelName(Books)('XABLAU');
//   });
//   it('Possui as propriedades corretas', function () {
//     ['title', 'XABLAU', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt']
//       .forEach(checkPropertyExists(books));
//   });
// });

const { expect } = require('chai');
const { Sequelize } = require('sequelize');

const { Book } = require('../../../src/models');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { dialect: 'mysql' },
);
const queryInterface = sequelize.getQueryInterface();

const properties = ['title', 'author', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt'];

describe('Teste Unitário - Books Model', function () {
  it('Possui o nome "books"', function () {
    const book = new Book();
    expect(book.constructor.tableName).to.be.equal('books');
  });
  it('Possui as propriedades corretas', async function () {
    const book = new Book();
    properties.forEach((property) => {
      expect(book).to.have.property(property);
    });
    expect(book).to.have.property('id');
  });
  it('Possui a quantidade de propriedades corretas', async function () {
    const columns = await queryInterface.describeTable('books');
    expect(Object.keys(columns)).to.have.length(7);
  });
});