const mapArticulo = (articulo) => {
    console.log(articulo)
    return {
        id: articulo.IDPUBLICADO,
        name: articulo.DESCRIPCION,
        sku: articulo.SKU,
        stock_quantity: articulo.CANTIDAD,
        price: articulo.PRECIOPUPLICADO,
        regular_price: articulo.PRECIOREAL,
        catalog_visibility: articulo.ACTIVO === 1 ? 'visible' : 'hidden',
        type: (!articulo.Variaciones || articulo.Variaciones.length === 0) ? 'simple' : 'variable',
        attributes: [
            {
                id: 1,
                name: 'Color',
                options: ['Amarillo'],
                variation:true,
                visible:true
            }
        ]
    }
};

module.exports = mapArticulo;
