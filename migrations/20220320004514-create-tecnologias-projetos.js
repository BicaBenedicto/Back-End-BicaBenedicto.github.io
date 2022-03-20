'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TecnologiasProjetos', {
      projeto_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tecnologia_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    },  { timestamps: false });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TecnologiasProjetos');
  }
};