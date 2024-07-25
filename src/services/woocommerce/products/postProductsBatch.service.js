const createOrUpdateProduct = require("../../../utils/createOrUpdateProduct");
const { WooCommerce } = require("../../../wooCommerce");
const putApiCabezeraService = require("../../linx/apicabezera/putApiCabezera.service");
const getApiDatosService = require("../../linx/apidatos/getApiDatos.service");
const putApiDatosService = require("../../linx/apidatos/putApiDatos.service");

const postProductsBatchService = async (IDINTERNOAPICABEZERA,IDPUBLICADO) => {
    // pongo en 2 procesando
    try {

        await putApiCabezeraService({
            where: { IDINTERNOAPICABEZERA: IDINTERNOAPICABEZERA },
            fields: { ACTUALIZANDO: 2 }
        });

    } catch (error) {
        console.error('Error en postProductsBatchService:', error);
    }

    //obtengo los articulos 
    const articulos = await getApiDatosService({ IDINTERNOAPICABEZERA, TIPODATO: 1,IDPUBLICADO})

    if (articulos && articulos.apiDatos.records != 0) {
        // armo el objeto que paso a la api
        const data = createOrUpdateProduct(articulos.apiDatos.data)

        try {
            console.log('POST products/batch')
            const response = await WooCommerce.post("products/batch", data)
            //leo objeto devuelto
            // si hay creados actualizo idpublicado en apidatos
            if (response.data.create) {
                console.log('UPDATE apiDatos')
                response.data.create.forEach(product => {
                    putApiDatosService({
                        where: { SKU: product.sku },
                        fields: {
                            IDPUBLICADO: product.id,
                            LINK: product.permalink,
                        }
                    })
                });
            }

        } catch (error) {
            console.error('Error en postProductsBatchService:', error);
        }
    }

    // pongo en 0 procesando
    try {

        await putApiCabezeraService({
            where: { IDINTERNOAPICABEZERA },
            fields: { ACTUALIZANDO: 0 }
        })

    } catch (error) {
        console.error('Error en postProductsBatchService:', error);
    }

    return

};

module.exports = postProductsBatchService;
