const camelize = require('camelize');
const connection = require('./connection');
const { getFields, getPlaceholders } = require('../utils/formattedQueries');

const queryFindById = `
  SELECT
    TR.id,
    TR.driver_id,
    TR.starting_address,
    TR.ending_address,
    TR.request_date,
    TR.travel_status_id,
    TS.status,
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'address', WP.address,
      'stopOrder', WP.stop_order
    )
  ) AS waypoints
  FROM travels AS TR INNER JOIN travel_status AS TS
    ON TR.travel_status_id = TS.id
  LEFT JOIN waypoints AS WP
    ON WP.travel_id = TR.id
  WHERE TR.id = ?
  GROUP BY TR.id;
`;

const saveWaypoints = async (waypoints, travelId) => {
  let insertPromises = [];

  if (waypoints && waypoints.length > 0) {
    insertPromises = waypoints.map(({ address, stopOrder }) => {
      const waypoint = { address, stopOrder, travelId };

      const columns = getFields(waypoint);
      const placeholders = getPlaceholders(waypoint);
      const query = `INSERT INTO waypoints (${columns}) VALUES (${placeholders});`;

      return connection.execute(query, [...Object.values(waypoint)]);
    });

    await Promise.all(insertPromises);
  }
};

const insert = async (travel) => {
  const { waypoints, ...travelData } = travel;
  const columns = getFields(travelData);
  const placeholders = getPlaceholders(travelData);
  const query = `INSERT INTO travels (${columns}) VALUES (${placeholders});`;
  const [{ insertId }] = await connection.execute(query, [
    ...Object.values(travelData),
  ]);
  await saveWaypoints(waypoints, insertId);

  return insertId;
};

const findById = async (travelId) => {
  const [[travel]] = await connection.execute(
    queryFindById,
    [travelId],
  );

  if (travel[0].waypoints[0].address === null) {
    travel[0].waypoints = [];
  }
  return camelize(travel);
};

const findByStatusId = async (statusId) => {
  const [travels] = await connection.execute(
    `SELECT
      TR.id,
      TR.driver_id,
      TR.starting_address,
      TR.ending_address,
      TR.request_date,
      COUNT(WP.stop_order) AS amount_stop
    FROM travels AS TR LEFT JOIN waypoints AS WP 
      ON WP.travel_id = TR.id
    WHERE TR.travel_status_id = ?
    GROUP BY TR.id;`,
    [statusId],
  );

  return camelize(travels);
};

const updateStatus = async (nextTravelStatusId, driverId, travelId) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE travels SET travel_status_id = ?, driver_id = ? WHERE id = ?',
    [nextTravelStatusId, driverId, travelId],
  );
  return affectedRows === 1;
};

module.exports = {
  insert,
  findById,
  findByStatusId,
  updateStatus,
};
