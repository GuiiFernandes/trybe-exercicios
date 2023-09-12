const camelize = require('camelize');

const connection = require('./connection');
const { getFields, getPlaceholders, getUpdateFields } = require('../utils/formattedQueries');

const findAll = async ({ table }) => {
  const [result] = await connection.execute(
    `SELECT * FROM ${table}`,
  );
  return camelize(result);
};

const findById = async ({ table, id }) => {
  const [result] = await connection.execute(
    `SELECT * FROM ${table} WHERE id = ?`,
    [id],
  );
  return camelize(result);
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

const update = async ({ table, id, data }) => {
  const fields = getUpdateFields(data);
  const values = Object.values(data);
  const query = `UPDATE ${table} SET ${fields} WHERE id = ?`;
  const [{ affectedRows }] = await connection.execute(query, [...values, id]);
  return !!affectedRows;
};

module.exports = {
  findAll,
  findById,
  deleteById,
  create,
  update,
};