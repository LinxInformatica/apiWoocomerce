const getAtributosArticulo = require("./getAtributosArticulo");

const mapArticulo = (articulo,create) => {
    const attributes=getAtributosArticulo(articulo)
    const result={}
    if(create===false) result.id=articulo.IDPUBLICADO
    
    result.name= articulo.DESCRIPCION,
    result.sku= articulo.SKU,
    result.stock_quantity= articulo.CANTIDAD,
    result.price= articulo.PRECIOPUPLICADO,
    result.regular_price= articulo.PRECIOREAL,
    result.catalog_visibility= articulo.ACTIVO === 1 ? 'visible' : 'hidden',
    result.type= (!articulo.Variaciones || articulo.Variaciones.length === 0) ? 'simple' : 'variable',
    result.attributes= attributes
    return result
};

module.exports = mapArticulo;
