const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const connection = require('../../src/db/connection');

const mockData = require('../mockData');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota de missões', function () {
  const mockMission = {
      name: 'Missão do Gui',
      year: '2030',
      country: 'Brasil',
      destination: 'Xablau',
    };

  beforeEach(function () {
    sinon.stub(connection, 'execute')
    .onFirstCall()
    .resolves([mockData])
    .onSecondCall()
    .resolves([[...mockData, { id: 5, ...mockMission }]]);
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockData));
    sinon.stub(fs.promises, 'writeFile').resolves();
  });

  afterEach(sinon.restore);

  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      const response = await chai.request(app).get('/missions');
      expect(response.status).to.be.equals(200);
      expect(response.body).to.be.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
      expect(response.body.missions.length).to.be.equals(4);
    });
  });

  describe('POST /missions', function () {
    it('Retorna todas as missões com a nova missão', async function () {
      const response = await chai.request(app).post('/missions').send(mockMission);

      expect(response.status).to.be.equals(201);
      expect(response.body).to.be.instanceOf(Array);
      expect(response.body.length).to.be.equals(5);
      expect(response.body[4]).to.be.deep.equals({ id: 5, ...mockMission });
    });

    it('Verifica se a função que escreve no banco de dados está sendo chamada', async function () {
      await chai.request(app).post('/missions').send(mockMission);
      expect(connection.execute.calledTwice).to.be.equals(true);
    });
  });
});