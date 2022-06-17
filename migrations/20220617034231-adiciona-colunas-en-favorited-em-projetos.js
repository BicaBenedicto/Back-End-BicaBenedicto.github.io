'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('Projetos', 'favorited', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Projetos', 'name_en', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Projetos', 'description_en', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Tecnologias', 'description_en', {
        type: Sequelize.STRING,
      }),
    ]);
   },
 
   down: async (queryInterface, _Sequelize) => {
     await Promise.all([
      queryInterface.removeColumn('Projetos', 'favorited'),
      queryInterface.removeColumn('Projetos', 'name_en'),
      queryInterface.removeColumn('Projetos', 'description_en'),
      queryInterface.removeColumn('Tecnologias', 'description_en'),
    ]);
   }
};
