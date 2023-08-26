const { readData, writeData } = require('./utils/fs');

(async () => {
  const data = await readData();
  const newData = data.filter(({ id }) => id <= 4);
  await writeData(newData, 'simpsonsFamily');
})();
