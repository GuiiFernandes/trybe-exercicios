const checkReqFields = require('../utils/checkedReqFields');

const waypointsExists = (waypoints) => {
  const requiredFields = ['address', 'stopOrder'];

    for (let index = 0; index < waypoints.length; index += 1) {
      const waypoint = waypoints[index];
      const result = checkReqFields(waypoint, requiredFields);
      if (result) return result;      
    }
};

const travelFieldsExists = (req, res, next) => {
  const requiredFields = ['startingAddress', 'endingAddress'];
  const { startingAddress, endingAddress, waypoints } = req.body;
  const body = { startingAddress, endingAddress };
  const result = checkReqFields(body, requiredFields);
  if (result) return res.status(result.status).json(result.data);
  if (waypoints) {
    const resultWaypoints = waypointsExists(waypoints);
    if (resultWaypoints) return res.status(resultWaypoints.status).json(resultWaypoints.data);
  }
  next();
};

module.exports = { travelFieldsExists };