const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const ApiDatos = sequelize.define('Woo_VariacionesAtributos', {
        IDAPIDATOS: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        IDINTERNODATO: {
            type: DataTypes.INTEGER,
        },
        SKU: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        ARTICULO: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        IDINTERNOVARIACION: {
            type: DataTypes.INTEGER,
        },
        SKUVARIACION: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        VARIACION: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        ATRIBUTO: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        IDATRIBUTO: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        IDATRIBUTOPADRE: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        ATRIBUTOPADRE: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
    }
    )

    return ApiDatos
};
