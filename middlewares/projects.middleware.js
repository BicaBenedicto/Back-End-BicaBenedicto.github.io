const { Projeto } = require('../models');
const { Projetos: ProjetosValidação, TOKEN } = require('../validations');
const { remove: removeValidation, create: createValidation, update: updateValidation } = ProjetosValidação;

const get = async (_require, _response, next) => next();

const remove = async (require, _response, next) => {
  try {
    const { id } = require.params;

    const token = require.headers.authorization;
    if (!token) return next('tokenEmpty');

    const validateToken = await TOKEN(token);

    if (!validateToken) return next('tokenInvalid');

    const validate = await removeValidation.validate({ id });
    if(validate.error) return next(validate.error);

    const technologyExists = await Projeto.findByPk(id);
    if(!technologyExists) return next('notFound');

    return next();
  } catch (e) {
    return next('idk');
  }
};

const create = async (require, _response, next) => {
  try {
    const { body } = require;

    const token = require.headers.authorization;
    if (!token) return next('tokenEmpty');

    const validateToken = await TOKEN(token);

    if (!validateToken) return next('tokenInvalid');

    const validate = await createValidation.validate(body);
    if(validate.error) return next(validate.error);

    return next();
  } catch (e) {
    return next('idk');
  }
};

const update = async (require, _response, next) => {
  try {
    const { body } = require;
    const { id } = require.params;

    const token = require.headers.authorization;
    if (!token) return next('tokenEmpty');

    const validateToken = await TOKEN(token);

    if (!validateToken) return next('tokenInvalid');

    const validate = await updateValidation.validate({...body, id});
    if(validate.error) return next(validate.error);

    const technologyExists = await Projeto.findByPk(id);
    if(!technologyExists.dataValues) return next('notFound');

    return next();
  } catch (e) {
    return next('idk');
  }
};

module.exports = {
  get,
  remove,
  create,
  update
};
