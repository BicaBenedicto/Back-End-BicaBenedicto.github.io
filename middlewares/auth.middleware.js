const jwt = require('jsonwebtoken');

const verifyToken = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    
    if(!authorization) return next('tokenEmpty');

    const t = jwt.verify(authorization, process.env.JWT_SECRET);
    return next();
  } catch(e) {
    return next('tokenInvalid');
  }
};

module.exports = verifyToken;
