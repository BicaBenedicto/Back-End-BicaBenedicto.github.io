'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Projetos', 'image', {
      allowNull: false,
      type: Sequelize.STRING(500),
    });
   },
 
   down: async (queryInterface, _Sequelize) => {
     await queryInterface.removeColumn('Projetos', 'image');
   }
};
