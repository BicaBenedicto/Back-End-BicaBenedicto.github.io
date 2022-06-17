require('dotenv').config();
const jwt = require('jsonwebtoken');
const { compare } = require('bcryptjs');

const { Usuario } = require('../models');

const jwtConfig = {
  expiresIn: 60 * 60 + 'h',
  algorithm: 'HS256',
};

const access = async (request, response, next) => {
  try {
    const { body } = request;

    // const user = await jwt.decode(body, process.env.JWT_LOGIN);

    const user = body;

    const newUser = await Usuario.findOne({ where: { email: user.email } });
    if (!newUser) return next('notFound');
    
    const passwordCompare = await compare(user.password, newUser.password);

    if(!passwordCompare) return next('passwordInvalid');

    const token = jwt.sign({ data: { id: newUser.id, email: newUser.email } }, process.env.JWT_SECRET, jwtConfig);
    return response.status(200).json({ token });
  } catch (e) {
    return next('idk');
  }
};

module.exports = {
  access,
};
