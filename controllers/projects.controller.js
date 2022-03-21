const { Projeto, Tecnologia, TecnologiasProjeto } = require('../models');

const get = async (_require, response, _next) => {
  const projects = await Projeto.findAll({ attributes: ['id', 'name', 'description', 'image', 'site', 'rep'] });
  const getProjects = await Promise.all(projects.map(async ({ dataValues: project}) => {
    const technologiesConnection = await TecnologiasProjeto.findAll({ where: { projeto_id: project.id }, attributes: ['projeto_id', 'tecnologia_id']});
    const technologies = await Promise.all(technologiesConnection.map(async ({ dataValues }) => Tecnologia.findOne({ where: { id: dataValues.tecnologia_id }, attributes: ['id', 'name', 'image', 'description']})));
    return {
      ...project,
      technologies
    };
  }));
  return response.status(200).json(getProjects);
};

const update = async (require, response, _next) => {
  const { id } = require.params;
  const { body } = require;
  await Projeto.update(body, { where: { id }});


  if(body.technologies) {
    await TecnologiasProjeto.destroy({ where: { projeto_id: id }});
    const getTechnologies = await Promise.all(body.technologies.map(async (name) => Tecnologia.findOne({ where: { name }, attributes: ['id', 'name', 'image', 'description'] })));
    await Promise.all(getTechnologies.map(async ({ dataValues }) => TecnologiasProjeto.create({ projeto_id: id, tecnologia_id: dataValues.id })));
    return response.status(201).json({ id, ...body, technologies: getTechnologies});
  }
  const technologiesConnection = await TecnologiasProjeto.findAll({ where: { projeto_id: id }});
  const technologies = await Promise.all(technologiesConnection.map(async ({ dataValues }) => Tecnologia.findOne({ where: { id: dataValues.tecnologia_id }, attributes: ['id', 'name', 'image', 'description'] })));

  return response.status(200).json({ id, ...body, technologies});
};

const create = async (require, response, next) => {
  const { name, image, description, rep, site, technologies } = require.body;
  const [project, created] = await Projeto.findOrCreate({
    where: { name },
    defaults: { name, image, description, rep, site },
  });
  if(created) return next('alreadyExists');

  const getTechnologies = await Promise.all(technologies.map(async (name) => Tecnologia.findOne({ where: { name }, attributes: ['id', 'name', 'image', 'description'] })));
  await Promise.all(getTechnologies.map(async ({ dataValues }) => TecnologiasProjeto.create({ projeto_id: project.id, tecnologia_id: dataValues.id })));

  return response.status(201).json({...project, technologies: getTechnologies});
};

const remove = async (require, response, _next) => {
  const { id } = require.params;
  await Promise.all([TecnologiasProjeto.destroy({ where: { projeto_id: id }}), Projeto.destroy({ where: { id }})])
  return response.status(204).end();
};

module.exports = {
  get,
  create,
  update,
  remove,
};
