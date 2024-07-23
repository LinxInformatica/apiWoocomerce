const mapArticulo = require("../../../utils/mapArticulo");
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
    const articulos = await getApiDatosService({ IDINTERNOAPICABEZERA, TIPODATO: 1,IDPUBLICADO})

    if (articulos && articulos.apiDatos.records != 0) {
        // armo el objeto que paso a la api
        const create = articulos.apiDatos.data
            .filter(articulo => articulo.IDPUBLICADO === "0")
            .map(articulo => mapArticulo(articulo))

        const update = articulos.apiDatos.data
            .filter(articulo => articulo.IDPUBLICADO !== "0")
            .map(articulo => mapArticulo(articulo))

        const data = {
            create: create,
            update: update
        }
        try {
            console.log('POST products/batch')
            const response = await WooCommerce.post("products/batch", data)
            //leo objeto devuelto
            if (response.data.create) {
                console.log('UPDATE apiDatos')
                const actualizaId = response.data.create.forEach(product => {
                    putApiDatosService({
                        where: { SKU: product.sku },
                        fields: {
                            IDPUBLICADO: product.id,
                            LINK: product.permalink,
                        }
                    })
                });
                await Promise.all(actualizaId)
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
