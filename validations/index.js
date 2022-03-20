const Joi = require('joi');

const Tecnologias = {
  update: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6),
    image: Joi.string().required(),
  }),
  create: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6),
    image: Joi.string().required(),
  }),
  remove: Joi.object({
    id: Joi.number().required(),
  }),
};

const Projetos = {
  update: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6),
    image: Joi.string().required(),
    site: Joi.string(),
    rep: Joi.string(),
    technologies: Joi.array(Joi.string()),
  }),
  create: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(6).required(),
    image: Joi.string().required(),
    site: Joi.string(),
    rep: Joi.string(),
    technologies: Joi.array(Joi.string()).required(),
  }),
  remove: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports = {
  Tecnologias,
  Projetos,
};
