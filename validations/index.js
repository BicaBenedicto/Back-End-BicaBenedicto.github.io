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

module.exports = {
  Tecnologias,
};
