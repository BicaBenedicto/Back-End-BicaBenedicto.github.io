const Joi = require('joi');

const Tecnologias = {
  update: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2),
    description: Joi.string().min(6),
    image: Joi.string(),
  }),
  create: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6).required(),
    image: Joi.string().required(),
  }),
  remove: Joi.object({
    id: Joi.number().required(),
  }),
};

const Projetos = {
  update: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2),
    description: Joi.string().min(6),
    image: Joi.string(),
    site: Joi.string(),
    rep: Joi.string(),
    technologies: Joi.array().items(Joi.string()),
  }),
  create: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6).required(),
    image: Joi.string().required(),
    site: Joi.string(),
    rep: Joi.string(),
    technologies: Joi.array().items(Joi.string()).required(),
  }),
  remove: Joi.object({
    id: Joi.number().required(),
  }),
};

const LOGIN = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const TOKEN = async (token) => {
  try {
    await jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (_e) {
    return false;
  }
};

module.exports = {
  Tecnologias,
  Projetos,
  LOGIN,
  TOKEN,
};
