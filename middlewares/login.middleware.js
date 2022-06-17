const { LOGIN } = require('../validations');

const access = (request, _response, next) => {
  const { body } = request;
  const validate = LOGIN.validate(body);
  if (validate.error) return next(validate.error);

  return next();
};

module.exports = {
  access,
};
