const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { genericCruds } = require('../../../src/models');
const { carsFromDb, carsFromModel } = require('../../integration/mocks/cars.mock');

describe('Testes unitários: GENERIC CRUDS MODEL', function () {
  it('FindAll busca todos os cars com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([carsFromDb]);
    const cars = await genericCruds.findAll({ table: 'cars' });
    expect(cars).to.be.an('array');
    expect(cars).to.be.deep.equal(carsFromModel);
  });

  it('FindById busca um car pelo id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([carsFromDb[1]]);
    const car = await genericCruds.findById({ table: 'cars', id: 2 });
    expect(car).to.be.an('object');
    expect(car).to.be.deep.equal(carsFromModel[1]);
  });
  afterEach(sinon.restore);
});