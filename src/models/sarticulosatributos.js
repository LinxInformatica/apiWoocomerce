const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('sArticulosAtributos', {
        IDAUTONUMBER: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        IDINTERNOARTICULO: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        IDATRIBUTO: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        FECHA: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        OBSERVACIONES: {
            type: DataTypes.STRING(1001),
            allowNull: true,
        }
    })
};
