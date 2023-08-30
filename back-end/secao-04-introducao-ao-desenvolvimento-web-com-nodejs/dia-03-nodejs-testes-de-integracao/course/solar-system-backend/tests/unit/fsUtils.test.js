const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { readData } = require('../../src/utils/fs');

const mockData = JSON.stringify([
  { id: 1, name: 'Mariner 2', year: 1962, country: 'USA', destination: 'Vênus' },
  { id: 2, name: 'Venera 4', year: 1967, country: 'URSS', destination: 'Vênus' },
  { id: 3, name: 'Mariner 5', year: 1967, country: 'USA', destination: 'Vênus' },
  { id: 4, name: 'Apollo 11', year: 1969, country: 'USA', destination: 'Lua' },
]);

describe('Testando a função readData', function () {
  it('retorna um array', async function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockData);
    const data = await readData();
    expect(data).to.be.instanceOf(Array);
    expect(data).to.have.lengthOf(4);
  });
});