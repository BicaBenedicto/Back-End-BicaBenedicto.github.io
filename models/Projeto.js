const Projeto = (sequelize, DataTypes) => {
  const projeto = sequelize.define('Projeto', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING(500),
    site: DataTypes.STRING,
    rep: DataTypes.STRING,
    image: DataTypes.STRING(500)
  }, { tableName: 'Projetos' });

  return projeto;
};

module.exports = Projeto;