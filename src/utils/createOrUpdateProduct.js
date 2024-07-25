const mapArticulo = require("./mapArticulo");

const createOrUpdateProduct = (articulos) => {
    //return { product }

    const create = articulos
        .filter(articulo => articulo.IDPUBLICADO === "0")
        .map(articulo => mapArticulo(articulo))

    const update = articulos
        .filter(articulo => articulo.IDPUBLICADO !== "0")
        .map(articulo => mapArticulo(articulo))

    return {
        create,
        update
    }
};

module.exports = createOrUpdateProduct;
