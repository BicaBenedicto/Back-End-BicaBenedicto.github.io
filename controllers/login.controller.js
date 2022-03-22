require('dotenv').config();
const jwt = require('jsonwebtoken');

const { Usuario } = require('../models');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const acess = async (request, response, next) => {
  const { body: user } = request;

  const newUser = await Usuario.findOne({ where: { email: user.email, password: user.password } });
  if (!newUser) return next('notFound');

  const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, jwtConfig);
  return response.status(200).json({ token });
};

module.exports = {
  acess,
};
