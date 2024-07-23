const mapArticulo = (articulo) => {
    return {
        name: articulo.DESCRIPCION,
        sku: articulo.SKU,
        stock_quantity: articulo.CANTIDAD,
        price: articulo.PRECIOPUPLICADO,
        regular_price: articulo.PRECIOREAL,
        catalog_visibility: articulo.ACTIVO === 1 ? 'visible' : 'hidden',
        type: articulo.Variaciones.length===0 ? 'simple' : 'variable'
    }
};

module.exports = mapArticulo;
