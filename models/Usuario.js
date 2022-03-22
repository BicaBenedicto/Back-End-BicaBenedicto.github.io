const Usuario = (sequelize, DataTypes) => {
  const usuario = sequelize.define('Usuario', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Usuarios' });

  return usuario;
};

module.exports = Usuario;
