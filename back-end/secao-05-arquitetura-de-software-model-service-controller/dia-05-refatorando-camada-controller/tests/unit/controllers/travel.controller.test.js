const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { travelService } = require('../../../src/services');
const { travelController } = require('../../../src/controllers');
const { 
  travelFromServiceSuccess,
  travelFromModel,
  travelFromServiceBadRequest,
  travelFromServiceNotFound,
} = require('../mocks/travel.mock');

describe('Testes unitários - PASSENGER CONTROLLER:', function () {
  it('Inserindo travel com sucesso - status 201', async function () {
    sinon.stub(travelService, 'requestTravel').resolves(travelFromServiceSuccess);
    const req = {
      params: { passengerId: 1 },
      body: { startingAddress: 'starting street', endingAddress: 'end street' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await travelController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({
      travel: travelFromModel,
      message: 'Travel created successfully',
    });
  });
  it('Não insere travel com params errado - status 404', async function () {
    sinon.stub(travelService, 'requestTravel').resolves(travelFromServiceNotFound);
    const req = {
    params: { passengerId: 0 },
    body: { startingAddress: 'starting street', endingAddress: 'end street' },
    };
    const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub(),
    };

    await travelController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Não insere travel com body errado - status 400', async function () {
    sinon.stub(travelService, 'requestTravel').resolves(travelFromServiceBadRequest);

    const req = {
      params: { passengerId: 1 },
      body: { startingAddress: 'st', endingAddress: 'en' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await travelController.createTravel(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(sinon.restore);
});