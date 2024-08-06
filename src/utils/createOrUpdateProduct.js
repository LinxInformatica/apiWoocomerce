const mapArticulo = require("./mapArticulo");

const createOrUpdateProduct = (articulos) => {
    //return { product }
    const create = articulos
        .filter(articulo => articulo.IDPUBLICADO === "0")
        .map(articulo => mapArticulo(articulo,true))

    const update = articulos
        .filter(articulo => articulo.IDPUBLICADO !== "0")
        .map(articulo => mapArticulo(articulo,false))

    const salida = {}
    if (create.length > 0) salida.create=create
    if (update.length > 0) salida.update=update
    return salida
};

module.exports = createOrUpdateProduct;
