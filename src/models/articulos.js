const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('articulos', {
    codarticulo: {
        type: DataTypes.CHAR(20),
        allowNull: false,
      },
    articulo: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
    idinternoarticulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
      },
    stockactual: {
        type: DataTypes.DECIMAL(14,2),
        allowNull: false,
      },
  });
};
