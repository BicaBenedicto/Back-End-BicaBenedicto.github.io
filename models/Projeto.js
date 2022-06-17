const Projeto = (sequelize, DataTypes) => {
  const projeto = sequelize.define('Projeto', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    name_en: DataTypes.STRING,
    description: DataTypes.STRING(500),
    description_en: DataTypes.STRING(500),
    site: DataTypes.STRING,
    rep: DataTypes.STRING,
    favorited: DataTypes.BOOLEAN,
    image: DataTypes.STRING(500)
  }, { tableName: 'Projetos' });

  return projeto;
};

module.exports = Projeto;