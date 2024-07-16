const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('apiCabezera', {
        IDINTERNOAPICABEZERA: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        DESCRIPCION: {
            type: DataTypes.STRING(51),
            allowNull: true
        },
        ACTIVA: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        EXECUTABLE: {
            type: DataTypes.STRING(201),
            allowNull: true
        },
        SITIO: {
            type: DataTypes.STRING(201),
            allowNull: true
        },
        CLAVECLIENTE: {
            type: DataTypes.STRING(101),
            allowNull: true
        },
        CLAVESECRETA: {
            type: DataTypes.STRING(101),
            allowNull: true
        },
        FTPSITIO: {
            type: DataTypes.STRING(101),
            allowNull: true
        },
        FTPUSUARIO: {
            type: DataTypes.STRING(101),
            allowNull: true
        },
        FTPCLAVE: {
            type: DataTypes.STRING(41),
            allowNull: true
        },
        IDDEPOSITO: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        IDLISTAPRECIOS: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        IDTIPOCOMPROBANTE: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        ESTADOPENDIENTE: {
            type: DataTypes.STRING(31),
            allowNull: true
        },
        ESTADOPROCESANDO: {
            type: DataTypes.STRING(31),
            allowNull: true
        },
        ESTADOCOMPLETADO: {
            type: DataTypes.STRING(31),
            allowNull: true
        },
        ACTUALIZADESCRIPCION: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZADESCRIPCIONGRUPOS: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZADESCRIPCIONMARCAS: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZANOMBRECLIENTE: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZASTOCK: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZAPRECIOS: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        ACTUALIZAPEDIDOS: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        DRIVERODBC: {
            type: DataTypes.STRING(51),
            allowNull: true
        },
        OBSERVACIONES: {
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        TIMEOUT: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        PAGINADO: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true
        },
        FECHAULTIMADESCARGA: {
            type: DataTypes.DATE,
            allowNull: true
        },
        HORAULTIMADESCARGA: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        FECHAULTIMACARGA: {
            type: DataTypes.DATE,
            allowNull: true
        },
        HORAULTIMACARGA: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        ACTUALIZANDO: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        COMANDO: {
            type: DataTypes.STRING(101),
            allowNull: false,
            defaultValue: ''
        },
        ERRORACTUALIZACION: {
            type: DataTypes.STRING(101),
            allowNull: false,
            defaultValue: ''
        }
    }, {
        indexes: [
            // Create a unique index on email
            {
                unique: true,
                fields: ['IDINTERNOAPICABEZERA'],
            },
        ]
    })
};
