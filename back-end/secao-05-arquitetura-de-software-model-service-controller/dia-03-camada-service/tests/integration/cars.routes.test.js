const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const connection = require('../../src/models/connection');
const { carsFromModel, newCarMock, carsFromDb } = require('./mocks/cars.mock');
const app = require('../../src/app');
const { driversListMock } = require('./mocks/drivers.mock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração: CARS ROUTES', function () {
  describe('GET /cars', function () {
    it('Retorna um array de carros com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([carsFromDb]);
      const response = await chai.request(app).get('/cars');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.deep.equal(carsFromModel);
    });
  });

  describe('GET /cars/:id', function () {
    it('Retorna o carro correto ao buscar o id 2', async function () {
      sinon.stub(connection, 'execute').resolves([[carsFromDb[1]]]);
      const response = await chai.request(app).get('/cars/2');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal(carsFromModel[1]);
    });
    it('Retorna status 404 e a mensagem de erro ao buscar o id 100', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const response = await chai.request(app).get('/cars/100');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({ message: 'Car not found' });
    });
  });

  describe('DELETE /cars/:id', function () {
    it('Retorna o status de sucesso ao deletar o id 1', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const response = await chai.request(app).delete('/cars/1');
      expect(response.status).to.be.equal(204);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({});
    });
    it('Retorna status 404 e a mensagem de erro ao deletar o id 100', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
      const response = await chai.request(app).delete('/cars/100');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({ message: 'Car not found' });
    });
  });

  describe('POST /cars', function () {
    it('Inseri corretamente um veículo', async function () {
      sinon.stub(connection, 'execute')
        .onFirstCall()
        .resolves([[]])
        .onSecondCall()
        .resolves([[driversListMock[2]]])
        .onThirdCall()
        .resolves([{ insertId: 3 }]);
      const response = await chai.request(app)
        .post('/cars')
        .send(newCarMock);
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        car: { id: 3, ...newCarMock },
        message: 'Car created successfully',
      });
    });
    it('Retorna o erro se a placa tiver errada', async function () {
      const newCar = { ...newCarMock, licensePlate: 'AAA003B' };
      sinon.stub(connection, 'execute')
        .resolves();
      const response = await chai.request(app)
        .post('/cars')
        .send(newCar);
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        message: '"licensePlate" must be in the format "AAA0000" or "AAA0A00"',
      });
    });
    it('Retorna o erro se a placa já está cadastrada', async function () {
      const newCar = { ...newCarMock, licensePlate: 'NCA0956' };
      sinon.stub(connection, 'execute')
        .onFirstCall()
        .resolves([[carsFromDb[0]]]);
      const response = await chai.request(app)
        .post('/cars')
        .send(newCar);
      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        message: 'Car already exists',
      });
    });
    it('Retorna o erro se o carro tiver mais de 10 anos', async function () {
      const newCar = { ...newCarMock, year: 2000 };
      sinon.stub(connection, 'execute')
        .onFirstCall()
        .resolves([[carsFromDb[0]]]);
      const response = await chai.request(app)
        .post('/cars')
        .send(newCar);
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        message: '"year" must be greater than or equal to 2015',
      });
    });
  });

  afterEach(sinon.restore);
});