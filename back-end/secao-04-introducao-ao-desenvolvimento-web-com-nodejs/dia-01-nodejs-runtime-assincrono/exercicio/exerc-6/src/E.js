const { readData, writeData } = require('./utils/fs');

(async () => {
  const data = await readData();
  const dataFamily = await readData('simpsonsFamily');
  const newData = data.filter(({ name }) => name === 'Nelson Muntz');
  await writeData([...dataFamily, ...newData], 'simpsonsFamily');
})();
