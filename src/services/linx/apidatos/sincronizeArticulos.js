const { ApiDatos, ApiCabezera } = require('../../../db');
const getProductsService = require('../../woocommerce/products/getProducts.service');

const getApiDatosService = require('./getApiDatos.service');
const putApiDatosService = require('./putApiDatos.service');

const sincronizeArticulos = async (params = {}) => {
    //
    // filtros
    let filtro = []
    const { IDINTERNOAPICABEZERA, SKU } = params;
    //buscar apidatos
    const articulos = await getApiDatosService({ IDINTERNOAPICABEZERA, TIPODATO: 1 ,SKU})

    if (articulos && articulos.apiDatos.records != 0) {
        // armo el objeto que paso a la api SOLO SIN IDPUBLICADO
        const articulosSinIdPublicado = articulos.apiDatos.data.filter(articulo => articulo.IDPUBLICADO === "0")

        try {
            console.log('Sinconizando...')
            // Convertimos map a un bucle for...of para manejar await
            for (const articulo of articulosSinIdPublicado) {
                const product = await getProductsService({ sku: articulo.SKU });
                if (product.wcProducts.records !== 0) {
                    await putApiDatosService({
                        where: { SKU: product.wcProducts.data[0].sku },
                        fields: {
                            IDPUBLICADO: product.wcProducts.data[0].id,
                            LINK: product.wcProducts.data[0].permalink,
                        }
                    })
                }

            }
            // const response = await WooCommerce.post("products/batch", data)
            // //leo objeto devuelto
            // // si hay creados actualizo idpublicado en apidatos
            // if (response.data.create) {
            //     console.log('UPDATE apiDatos')
            //     response.data.create.forEach(product => {
            //         putApiDatosService({
            //             where: { SKU: product.sku },
            //             fields: {
            //                 IDPUBLICADO: product.id,
            //                 LINK: product.permalink,
            //             }
            //         })
            //     });
            // }


        } catch (error) {
            console.error('Error en postProductsBatchService:', error);
        }
    }

    return
};

module.exports = sincronizeArticulos;
