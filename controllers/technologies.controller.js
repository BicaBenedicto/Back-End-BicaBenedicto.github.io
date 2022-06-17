const { Tecnologia, TecnologiasProjeto } = require('../models');

const get = async (_require, response, _next) => {
  const technologies = await Tecnologia.findAll({
    attributes: ['id', 'name', 'description', 'description_en', 'image'],
  });
  return response.status(200).json(technologies);
};

const update = async (require, response, _next) => {
  const { id } = require.params;
  const { body } = require;
  await Tecnologia.update(body, { where: { id }});
  return response.status(200).json({ id, ...body});
};

const create = async (require, response, next) => {
  const { name, image, description } = require.body;
  const [technologies, created] = await Tecnologia.findOrCreate({
    where: { name },
    defaults: { name, image, description },
  });
  if(!created) return next('alreadyExists');
  return response.status(201).json(technologies);
};

const remove = async (require, response, _next) => {
  const { id } = require.params;
  await Promise.all([TecnologiasProjeto.destroy({ where: { tecnologia_id: id } }), Tecnologia.destroy({ where: { id } })]);
  return response.status(204).end();
};

module.exports = {
  get,
  create,
  update,
  remove,
};
