const { readData } = require('./utils/fs');

(async () => {
  const data = await readData();
  data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
})();
