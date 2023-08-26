const { readData, writeData } = require('./utils/fs');

(async () => {
  const data = await readData();
  const newData = data.filter(({ id }) => !(id === '10' || id === '6'));
  await writeData(newData);
})();