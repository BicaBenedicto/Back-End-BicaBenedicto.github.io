const TecnologiasProjeto = (sequelize, DataTypes) => {
  const tecnologiasProjeto = sequelize.define('TecnologiasProjeto', {
    projeto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tecnologia_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },  { timestamps: false, tableName: 'TecnologiasProjetos' });

  return tecnologiasProjeto;
};

module.exports = TecnologiasProjeto;
