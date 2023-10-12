const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = (req, _res, next) => {
  const bearerToken = req.headers.authorization;
  const token = extractToken(bearerToken);
  if (!token) {
    const err = new Error('Token not found');
    err.status = 401;
    return next(err);
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};  