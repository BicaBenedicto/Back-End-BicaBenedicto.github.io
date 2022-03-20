const Projeto = (sequelize, DataTypes) => {
  const projeto = sequelize.define("Projeto", {
    name: DataTypes.STRING,
    description: DataTypes.STRING(500),
    site: DataTypes.STRING,
    rep: DataTypes.STRING,
    image: DataTypes.STRING(500)
  });

  return projeto;
};
