const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('familias', {
    idfamilia: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        primaryKey:true
      },
    familia: {
      type: DataTypes.CHAR(31),
      allowNull: true
    },
  });
};
