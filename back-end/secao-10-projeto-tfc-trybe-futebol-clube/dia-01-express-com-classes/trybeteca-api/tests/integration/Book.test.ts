import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../../src/App';
import SequelizeBook from '../../src/database/models/SequelizeBook';
import { book, books } from '../mocks/Book.mocks';
import Validations from '../../src/middlewares/Validations';
import { tokenMock } from '../mocks/Auth.mock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Books Test', function() {
  it('should create a book', async function() {
    sinon.stub(SequelizeBook, 'create').resolves(book as any);
    sinon.stub(Validations, 'validateBook').returns();

    const { id, ...sendData } = book;

    const { status, body } = await chai
      .request(app)
      .post('/books')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send(sendData);

    expect(status).to.equal(201);
    expect(body).to.deep.equal(book);
  });

  it('shouldn\'t create a book with invalid body data', async function() {
    const { status, body } = await chai
      .request(app)
      .post('/books')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send({});

    expect(status).to.equal(400);
    expect(body.message).to.equal('title is required');
  });

  it('should return all books', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves(books as any);

    const { status, body } = await chai
      .request(app)
      .get('/books')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(books);
  });

  it('should return a book by id', async function() {
    sinon.stub(SequelizeBook, 'findOne').resolves(book as any);

    const { status, body } = await chai
      .request(app)
      .get('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(book);
  });

  it('should return not found if the book doesn\'t exists', async function() {
    sinon.stub(SequelizeBook, 'findOne').resolves(null);

    const { status, body } = await chai
      .request(app)
      .get('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  it('should update a book', async function () {
    sinon.stub(SequelizeBook, 'update').resolves([1] as any);
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(Validations, 'validateBook').returns();

    const { id, ...sendData } = book;

    const { status, body } = await chai
      .request(app)
      .put('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send(sendData);

    expect(status).to.equal(200);
    expect(body.message).to.equal('Book updated');
  });

  it('should return not found when the book to update does not exists', async function () {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);

    const { id, ...sendData } = book;

    const { status, body } = await chai
      .request(app)
      .put('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send(sendData);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  it('should return conflict when there is nothing to be updated', async function () {
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(SequelizeBook, 'update').resolves([0] as any);

    const { id, ...sendData } = book;

    const { status, body } = await chai
      .request(app)
      .put('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send(sendData);

    expect(status).to.equal(409);
    expect(body.message).to.equal('There are no updates to perform in Book 1');
  });

  it('should delete a book', async function() {
    sinon.stub(SequelizeBook, 'destroy').resolves();
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);

    const { status, body } = await chai
      .request(app)
      .delete('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(200);
    expect(body.message).to.equal('Book deleted');
  });

  it('should return not found when the book to delete does not exists', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);

    const { status, body } = await chai
      .request(app)
      .delete('/books/1')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });
  
  it('should find a book with author Tolki', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves(books as any);

    const { status, body } = await chai
      .request(app)
      .get('/books/search?q=Tolki')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(books);
  });

  it('should return not found when there is no book with the author xablau', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves([]);

    const { status, body } = await chai
      .request(app)
      .get('/books/search?q=xablau')
      .set('Authorization', `Bearer ${tokenMock}`);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Author xablau not found');
  });

  it('should give the discount correctly', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(SequelizeBook, 'update').resolves([1] as any);
    sinon.stub(Validations, 'validateDiscount').returns();

    const { status, body } = await chai
      .request(app)
      .patch('/books/1/discount')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send({ discount: 0.2 });

    expect(status).to.equal(200);
    
    expect(body.message).to.equal('Book updated');
  });

  it('should return an error if the book is not found', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);

    const { status, body } = await chai
      .request(app)
      .patch('/books/99/discount')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send({ discount: 0.2 });

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 99 not found');
  });

  it('an error should be returned if the discount was greater than 70% of the book value', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);

    const { status, body } = await chai
      .request(app)
      .patch('/books/1/discount')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send({ discount: 0.8 });

    expect(status).to.equal(400);
    expect(body.message).to.equal('Discount must be between 0 and 0.7');
  });

  it('should return conflict when there is nothing to be discounted', async function () {
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(SequelizeBook, 'update').resolves([0] as any);

    const { id, ...sendData } = book;

    const { status, body } = await chai
      .request(app)
      .patch('/books/1/discount')
      .set('Authorization', `Bearer ${tokenMock}`)
      .send({ discount: 0.2 });

    expect(status).to.equal(409);
    expect(body.message).to.equal('There are no updates to perform in Book 1');
  });
  
  afterEach(sinon.restore);
});