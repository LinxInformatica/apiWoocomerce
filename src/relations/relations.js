module.exports = (sequelize) => {
    // Relaciones
    const { ApiDatos, ApiCabezera, GAtributos, SArticulosAtributos } = sequelize.models

    ApiCabezera.hasMany(ApiDatos, {
        foreignKey: 'IDINTERNOAPICABEZERA',
        as: 'Datos'
    })

    ApiDatos.belongsTo(ApiCabezera, {
        foreignKey: 'IDINTERNOAPICABEZERA',
        as: 'Cabezera'
    })

    ApiDatos.hasMany(ApiDatos, {
        foreignKey: 'IDINTERNOVARIACION',
        as: 'Variaciones'
    })

    ApiDatos.belongsTo(ApiDatos, {
        foreignKey: 'IDINTERNOVARIACION',
        as: 'ArticuloBase'
    })

    ApiDatos.hasMany(SArticulosAtributos, {
        foreignKey: 'IDINTERNOARTICULO',
        sourceKey: 'IDINTERNODATO',
        as: 'Atributos'
    })

    SArticulosAtributos.belongsTo(ApiDatos, {
        foreignKey: 'IDINTERNOARTICULO',
        targetKey: 'IDINTERNODATO',
        as: 'articulosatributos_apidatos'
    })

    ApiDatos.hasMany(SArticulosAtributos, {
        foreignKey: 'IDATRIBUTO',
        sourceKey: 'SKU',
        as: 'atributos_articulosAtributos'
    })

    SArticulosAtributos.belongsTo(ApiDatos, {
        foreignKey: 'IDATRIBUTO',
        targetKey: 'SKU',
        as: 'AtributosLeyenda'
    })


}