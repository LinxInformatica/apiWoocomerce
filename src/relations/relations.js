module.exports = (sequelize) => {
    // Relaciones
    const { ApiDatos, ApiCabezera, GAtributos ,Woo_VariacionesAtributos} = sequelize.models

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

    ApiDatos.belongsTo(ApiDatos, {
        foreignKey: 'IDINTERNOVARIACION',
        as: 'AtributosBase'
    })

    ApiDatos.hasMany(Woo_VariacionesAtributos, {
        foreignKey: 'IDINTERNODATO',
        sourceKey: 'IDINTERNODATO',
        as: 'ArticuloAtributos'
    })

    Woo_VariacionesAtributos.belongsTo(ApiDatos, {
        foreignKey: 'IDINTERNODATO',
        as: 'AtributosArticulo'
    })

    ApiDatos.hasMany(Woo_VariacionesAtributos, {
        foreignKey: 'IDINTERNOVARIACION',
        sourceKey: 'IDINTERNODATO',
        as: 'VariacionAtributos'
    })

    Woo_VariacionesAtributos.belongsTo(ApiDatos, {
        foreignKey: 'IDINTERNOVARIACION',
        as: 'AtributosVariacion'
    })


}