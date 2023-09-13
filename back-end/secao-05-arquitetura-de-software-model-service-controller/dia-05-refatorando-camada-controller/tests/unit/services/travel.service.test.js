const { expect } = require('chai');
const sinon = require('sinon');

const { travelService } = require('../../../src/service');
const { genericCruds, travelModel } = require('../../../src/models');
const { passengerMock } = require('../mocks/passengers.mock');
const { travelIdFromModel, travelFromModel, travelInputData } = require('../mocks/travel.mock');

describe('Testes Unitários - TRAVEL SERVICE:', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(genericCruds, 'findById')
      .onFirstCall()
      .resolves(passengerMock)
      .onSecondCall()
      .resolves(travelFromModel);
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    const responseService = await travelService.requestTravel(travelInputData);
    expect(responseService.status).to.equal(201);
    expect(responseService.data).to.deep.equal({
      travel: travelFromModel,
      message: 'Travel created successfully',
    });
  });

  it('Inserindo travel com waypoints com sucesso', async function () {
    const inputData = {
      ...travelInputData,
      waypoints: [{ address: 'Rua dos bobos', stopOrder: 1 },
        { address: 'Rua dos espertos', stopOrder: 2 }],
    };

    sinon.stub(genericCruds, 'findById')
      .onFirstCall()
      .resolves(passengerMock)
      .onSecondCall()
      .resolves({ ...travelFromModel, ...inputData });
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal(201);
    expect(responseService.data).to.deep.equal({
      travel: { ...travelFromModel, ...inputData },
      message: 'Travel created successfully',
    });
  });

  it('Inserir travel com endereços iguais retorna um erro', async function () {
    const inputData = {
      ...travelInputData,
      endingAddress: 'starting street',
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal(400);
    expect(responseService.data).to.deep.equal({
      message: '"endingAddress" contains an invalid value',
    });
  });
  afterEach(sinon.restore);
});