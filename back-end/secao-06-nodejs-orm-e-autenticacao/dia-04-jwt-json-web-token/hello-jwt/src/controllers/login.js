const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { JWT_SECRET } = process.env;

const isBodyValid = (body) => Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  const { error } = isBodyValid(req.body);
  if (error) return next(error);
  const jwtConfig = { expiresIn: '1h' };

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.status = 401;
    return next(err);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = { username, admin };
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return res.status(200).json({ token });
};