module.exports = (req, _res, next) => {
  const { admin } = req.user;
  if (!admin) {
    const err = new Error('Restricted access');
    err.status = 403;
    return next(err);
  }
  return next();
};