const camelize = require('camelize');

const connection = require('./connection');

const findAll = async () => {
  const [passengers] = await connection.execute(
    'SELECT * FROM passengers',
  );
  return camelize(passengers);
};

const findById = async (id) => {
  const [passenger] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [id],
  );
  return camelize(passenger);
};

const deleteById = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM passengers WHERE id = ?',
    [id],
  );
  return affectedRows === 1;
};

const createPassenger = async ({ name, email, phone }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO passengers (name, email, phone) VALUES (?, ?, ?)',
    [name, email, phone],
  );
  return {
    id: insertId,
    name,
    email,
    phone,
  };
};

module.exports = {
  findAll,
  findById,
  deleteById,
  createPassenger,
};