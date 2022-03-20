'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('TecnologiasProjetos',
    [
      {
        projeto_id: 1,
        tecnologia_id: 1,
      },
      {
        projeto_id: 1,
        tecnologia_id: 2,
      },
      {
        projeto_id: 2,
        tecnologia_id: 1,
      },
      {
        projeto_id: 2,
        tecnologia_id: 2,
      },
      {
        projeto_id: 2,
        tecnologia_id: 3,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('TecnologiasProjetos', null, {}),
};
