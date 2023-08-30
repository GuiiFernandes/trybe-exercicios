const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      const response = await chai.request(app).get('/missions');

      expect(response.status).to.be.equals(200);
      expect(response.body).to.be.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
    });
  });

  describe('POST /missions', function () {
    it('Cria uma nova missão', async function () {
      const mockMission = {
        name: 'Missão do Gui',
        year: '2030',
        country: 'Brasil',
        destination: 'Xablau',
      };

      const response = await chai.request(app).post('/missions').send(mockMission);

      expect(response.status).to.be.equals(201);
      expect(response.body).to.be.instanceOf(Array);
      expect(response.body.length).to.be.equals(24);
      expect(response.body[23]).to.be.deep.equals({ id: 24, ...mockMission });
    });
  });
});