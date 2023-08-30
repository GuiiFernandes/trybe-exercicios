const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');
const mockFile = require('../mockDatas');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates:', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
});