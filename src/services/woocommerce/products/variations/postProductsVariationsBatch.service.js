const createOrUpdateVariations = require("../../../../utils/createOrUpdateVariations");
const { WooCommerce } = require("../../../../wooCommerce");
const getApiDatosService = require("../../../linx/apidatos/getApiDatos.service");
const putApiDatosService = require("../../../linx/apidatos/putApiDatos.service");

const postProductsVariationsBatchService = async (IDINTERNOAPICABEZERA, SKU) => {
    //obtengo los articulos 
    const articulos = await getApiDatosService({ IDINTERNOAPICABEZERA, TIPODATO: 1, SKU })
    if (articulos && articulos.apiDatos.records != 0) {
        // armo el objeto que paso a la api SOLO LAS VARIACIONES

        const articulosConVariacion = articulos.apiDatos.data.filter(articulo => articulo.IDINTERNOVARIACION === 0)
        //armo array de objetos con id y variaciones
        const data = createOrUpdateVariations(articulosConVariacion)

        try {
            
            for (const variacion of data) {
                if (variacion.variaciones.create.length > 0 || variacion.variaciones.update.length > 0) {
                    console.log(`products/${variacion.id}/variations/batch`)
                    const response = await WooCommerce.post(`products/${variacion.id}/variations/batch`, variacion.variaciones)
                    //leo objeto devuelto
                    // si hay creados actualizo idpublicado en apidatos
                    if (Array.isArray(response.data.create) && response.data.create.length > 0) {
                        console.log('UPDATE apiDatos')
                        for (const product of response.data.create) {
                            return putApiDatosService({
                                where: { SKU: product.sku },
                                fields: {
                                    IDPUBLICADO: product.id,
                                    LINK: product.permalink,
                                }
                            })
                        };
                    }
                }

            }

        } catch (error) {
            console.error('Error en postProductsBatchService:', error);
        }



    }
    return

};

module.exports = postProductsVariationsBatchService;
