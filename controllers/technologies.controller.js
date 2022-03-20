const { Tecnologias } = require('../models');

const get = async (_require, response, _next) => {
  const technologies = await Tecnologias.findAll({ attributes: ['id', 'name', 'description', 'image'] });
  return response.status(200).json({ technologies });
};

const update = async (require, response, _next) => {
  const { id } = require.params;
  const { body } = require;
  const technologies = await Tecnologias.update(body, { where: { id }});
  return response.status(200).json(technologies);
};

const create = async (require, response, _next) => {
  const { name, image, description, rep, site } = require.body;
  const [technologies, created] = await Tecnologias.findOrCreate({
    where: { name },
    defaults: { name, image, description, rep, site },
  });
  if(created) return next({ details: 'alreadyExists' });
  return response.status(201).json(technologies);
};

const remove = async (require, response, _next) => {
  const { id } = require.params;
  await Tecnologias.destroy({ where: id });
  return response.status(204).end();
};

module.exports = {
  get,
  create,
  update,
  remove,
};
