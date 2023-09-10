// const connection = require('./connection');

// const findAll = async () => {
//   const [cars] = await connection.execute(
//     'SELECT * FROM cars',
//   );
//   return cars;
// };

// const findById = async (id) => {
//   const [car] = await connection.execute(
//     'SELECT * FROM cars WHERE id = ?',
//     [id],
//   );
//   return car;
// };

// module.exports = {
//   findAll,
//   findById,
// };