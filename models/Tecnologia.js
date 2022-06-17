const Tecnologia = (sequelize, DataTypes) => {
  const tecnologia = sequelize.define('Tecnologia', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING(500),
    description_en: DataTypes.STRING(500),
    image: DataTypes.STRING(500)
  }, { tableName: 'Tecnologias' });

  return tecnologia;
};

module.exports = Tecnologia;