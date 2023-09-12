const { expect } = require('chai');
const sinon = require('sinon');

const { travelService } = require('../../../src/service');
const { genericCruds } = require('../../../src/models');
const { passengerMock } = require('../mocks/passengers.mock');
const { travelIdFromModel, travelFromModel, travelInputData } = require('../mocks/travel.mock');

describe('Testes Unitários - TRAVEL SERVICE:', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(genericCruds, 'findById')
      .onFirstCall()
      .resolves(passengerMock)
      .onSecondCall()
      .resolves(travelFromModel);
    sinon.stub(genericCruds, 'create').resolves(travelIdFromModel);
    const responseService = await travelService.requestTravel(travelInputData);
    expect(responseService.status).to.equal(200);
    expect(responseService.data).to.deep.equal(travelFromModel);
  });
  afterEach(sinon.restore);
});