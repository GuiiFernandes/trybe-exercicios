const { readData, writeData } = require('./utils/fs');

(async () => {
  const data = await readData();
  const dataFamily = await readData('simpsonsFamily');
  const newData = data.filter(({ name }) => name === 'Maggie Simpson');
  const newDataFamily = dataFamily.filter(({ name }) => name !== 'Nelson Muntz');
  await writeData([...newDataFamily, ...newData], 'simpsonsFamily');
})();