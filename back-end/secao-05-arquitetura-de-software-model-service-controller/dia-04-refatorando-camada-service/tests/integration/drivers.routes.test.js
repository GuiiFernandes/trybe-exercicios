const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const connection = require('../../src/models/connection');
const app = require('../../src/app');
const { driversListMock, newDriverMock } = require('./mocks/drivers.mock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração: DRIVERS ROUTES', function () {
  describe('GET /drivers', function () {
    it('Retorna um array de motoristas com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([driversListMock]);
      const response = await chai.request(app).get('/drivers');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        drivers: driversListMock,
        message: 'Drivers found successfully',
      });
    });
  });

  describe('GET /drivers/:id', function () {
    it('Retorna o motorista correto ao buscar o id 2', async function () {
      sinon.stub(connection, 'execute').resolves([[driversListMock[1]]]);
      const response = await chai.request(app).get('/drivers/2');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        driver: driversListMock[1],
        message: 'Driver found successfully',
      });
    });
    it('Retorna status 404 e a mensagem de erro ao buscar o id 100', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const response = await chai.request(app).get('/cars/100');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({ message: 'Car not found' });
    });
  });

  describe('POST /drivers', function () {
    it('Inseri corretamente um motorista', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 6 }]);
      const response = await chai.request(app)
        .post('/drivers')
        .send(newDriverMock);
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal({
        driver: { id: 6, ...newDriverMock },
        message: 'Driver created successfully',
      });
    });
  });

  afterEach(sinon.restore);
});