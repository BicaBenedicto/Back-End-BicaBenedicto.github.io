const TYPES = {
  notFound: {
    code: 404,
    message: 'Not Found',
  },
  passwordInvalid: {
    code: 400,
    message: 'Password invalid',
  },
  tokenEmpty: {
    code: 401,
    message: 'Token not found',
  },
  tokenInvalid: {
    code: 401,
    message: 'Expired or invalid token',
  },
  alreadyExists: {
    code: 409,
    message: 'Already exists with this name',
  },
};

const handdleGenericErrors = (error, _request, response, _next) => {
  if (TYPES[error]) {
    const { code, message } = TYPES[error];
    return response.status(code).json({ message });
  }
  if (error.details) {
    const [details] = error.details;
    return response.status(400).json({ message: details.message });
  }
  return response.status(500).json({ message: 'Interval error' });
};

module.exports = handdleGenericErrors;
