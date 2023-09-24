const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../../src/models');
const BookService = require('../../../src/services/books.service');
const { booksMock, bookMock } = require('../mocks');

describe('Teste Unitário - Books Service', function () {
  describe('Método getAll', function () {
    it('Deve retornar corretamente quando há livros cadastrados', async function () {
      sinon.stub(Book, 'findAll').resolves(booksMock);
      const books = await BookService.getAll();
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 200,
        body: {
          message: 'Book found successfully',
          books: booksMock,
        },
      });
    });
    it('Deve retornar corretamente quando não há livros cadastrados', async function () {
      sinon.stub(Book, 'findAll').resolves([]);
      const books = await BookService.getAll();
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 404,
        body: { message: 'There are no books registered' },
      });
    });
  });
  describe('Método getById', function () {
    it('Deve retornar corretamente quando encontra o livro', async function () {
      sinon.stub(Book, 'findByPk').resolves({ id: 1, ...bookMock });
      const books = await BookService.getById('1');
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 200,
        body: {
          message: 'Book found successfully',
          book: { id: 1, ...bookMock },
        },
      });
    });
    it('Deve retornar corretamente quando não há livros cadastrados', async function () {
      sinon.stub(Book, 'findByPk').resolves(null);
      const books = await BookService.getById(999);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 404,
        body: { message: 'Book not found' },
      });
    });
  });
  describe('Método create', function () {
    it('Deve retornar corretamente quando criar o livro', async function () {
      sinon.stub(Book, 'create').resolves({ id: 1, ...bookMock });
      const books = await BookService.create(bookMock);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 201,
        body: {
          message: 'Book created successfully',
          book: { id: 1, ...bookMock },
        },
      });
    });
  });
  describe('Método update', function () {
    it('Deve retornar corretamente quando atualiza o livro', async function () {
      sinon.stub(Book, 'update').resolves(1);
      sinon.stub(Book, 'findByPk').resolves({ id: 1, ...bookMock });
      const books = await BookService.update(1, bookMock);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 200,
        body: {
          message: 'Book updated successfully',
          book: { id: 1, ...bookMock },
        },
      });
    });
    it('Deve retornar corretamente quando não há livros cadastrados', async function () {
      sinon.stub(Book, 'update').resolves(0);
      const books = await BookService.update(999, bookMock);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 404,
        body: { message: 'Book not found' },
      });
    });
  });
  describe('Método remove', function () {
    it('Deve retornar corretamente quando remove o livro', async function () {
      sinon.stub(Book, 'destroy').resolves(1);
      const books = await BookService.remove(1);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 204,
        body: {
          message: 'Book deleted successfully',
        },
      });
    });
    it('Deve retornar corretamente quando falha na remoção', async function () {
      sinon.stub(Book, 'destroy').resolves(0);
      const books = await BookService.remove(999);
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 404,
        body: { message: 'Book not found' },
      });
    });
  });
  describe('Método getByAuthor', function () {
    it('Deve retornar corretamente quando encontra livros', async function () {
      sinon.stub(Book, 'findAll').resolves(booksMock);
      const books = await BookService.getByAuthor('J. R. R.');
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 200,
        body: {
          message: 'Book found successfully',
          book: booksMock,
        },
      });
    });
    it('Deve retornar corretamente quando não encontra livros', async function () {
      sinon.stub(Book, 'findAll').resolves([]);
      const books = await BookService.getByAuthor('Xablau');
      expect(books).to.be.an('object');
      expect(books).to.deep.equal({
        status: 404,
        body: { message: 'Book not found' },
      });
    });
  });
  afterEach(sinon.restore);
});