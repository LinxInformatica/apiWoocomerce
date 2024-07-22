const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const GAtributos=sequelize.define('GAtributos', {
        IDATRIBUTO: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        DESCRIPCION: {
            type: DataTypes.STRING(51),
            allowNull: true
        },
        IDATRIBUTOPADRE: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        CODIGOCOLOR: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        IDINTERNO: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        }
    })
    return GAtributos
};
