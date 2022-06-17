const { LOGIN } = require('../validations');

const access = (request, _response, next) => {
  try {
    const { body } = request;
    const validate = LOGIN.validate(body);
    if (validate.error) return next(validate.error);

    return next();
  } catch (e) {
    return next('idk');
  }
};

module.exports = {
  access,
};
