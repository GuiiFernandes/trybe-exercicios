const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');
const { travelIdFromModel, travelIdFromDB, travelByStatusFromDB,
  travelByStatusFromModel } = require('../mocks/travel.mock');

describe('Testes unitários: TRAVEL MODEL', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelIdFromDB]);
    const inputData = { startingAddress: 'starting street', endingAddress: 'ending street' };
    const insertId = await travelModel.insert(inputData);

    expect(insertId).to.be.a('number');
    expect(insertId).to.be.equal(travelIdFromModel);
  });

  it('Inserindo travel com waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([travelIdFromDB])
      .onSecondCall()
      .resolves(null);
    const inputData = {
      startingAddress: 'starting street',
      endingAddress: 'ending street',
      waypoints: [{ address: 'waypoint street', stopOrder: 1 }],
    };

    const insertId = await travelModel.insert(inputData);

    expect(insertId).to.be.a('number');
    expect(insertId).to.be.equal(travelIdFromModel);
  });

  it('Buscando travel pelo id do status com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelByStatusFromDB]);

    const travelByStatus = await travelModel.findByStatusId(1);

    expect(travelByStatus).to.be.an('array');
    expect(travelByStatus).to.be.deep.equal(travelByStatusFromModel);
  });

  afterEach(sinon.restore);
});
