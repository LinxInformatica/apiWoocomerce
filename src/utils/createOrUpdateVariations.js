const createOrUpdateProduct = require("./createOrUpdateProduct");

const createOrUpdateVariations = (articulos) => {
    //return { product }

    const variaciones = articulos.map(articulo => {
        return {
            id: articulo.IDPUBLICADO,
            variaciones: createOrUpdateProduct(articulo.Variaciones)
        }
    })
    return variaciones
};

module.exports = createOrUpdateVariations;
