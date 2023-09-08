const express = require('express');
const crypto = require('crypto');

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, email, password, phone } = req.body;
  if ([firstName, email, password, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = crypto.randomBytes(8).toString('hex');
  res.status(201).json({ token });
});

module.exports = router;