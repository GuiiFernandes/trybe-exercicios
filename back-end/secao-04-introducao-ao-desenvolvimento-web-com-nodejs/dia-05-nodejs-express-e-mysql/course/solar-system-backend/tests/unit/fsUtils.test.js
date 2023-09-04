const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const mockData = require('../mockData');

const { readData } = require('../../src/utils/fs');

describe('Testando a função readData', function () {
  it('retorna um array com todos os elementos do arquivo json', async function () {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockData));
    const data = await readData();
    expect(data).to.be.instanceOf(Array);
    expect(data).to.have.lengthOf(4);
    sinon.restore();
  });
});