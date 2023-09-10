const connection = require('./connection');
const { getFields, getPlaceholders } = require('../utils/formattedQueries');

const findAll = async ({ table }) => {
  const [result] = await connection.execute(
    `SELECT * FROM ${table}`,
  );
  return result;
};

const findById = async ({ table, id }) => {
  const [result] = await connection.execute(
    `SELECT * FROM ${table} WHERE id = ?`,
    [id],
  );
  return result;
};

const deleteById = async ({ table, id }) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM ${table} WHERE id = ?`,
    [id],
  );
  return affectedRows === 1;
};

const create = async ({ table, data }) => {
  const fields = getFields(data);
  const placeholders = getPlaceholders(data);
  const values = Object.values(data);
  const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;
  const [{ insertId }] = await connection.execute(query, values);
  return {
    id: insertId,
    ...data,
  };
};

module.exports = {
  findAll,
  findById,
  deleteById,
  create,
};