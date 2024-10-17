const path = require('path');
const fs = require('fs');

const view = async (request, response, next) => {
  const filename = request.params.filename;
  const folder = request.query.folder;
  const filePath = path.join(__dirname, `/../assets/${folder}/`, filename);

  if (fs.existsSync(filePath)) {
      return response.sendFile(filePath);
  }

  return next('notFound')
};

module.exports = {
  view,
};
