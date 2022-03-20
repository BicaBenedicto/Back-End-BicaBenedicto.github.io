const Tecnologia = (sequelize, DataTypes) => {
  const tecnologia = sequelize.define("Tecnologia", {
    name: DataTypes.STRING,
    description: DataTypes.STRING(500),
    image: DataTypes.STRING(500)
  });

  return tecnologia;
};
