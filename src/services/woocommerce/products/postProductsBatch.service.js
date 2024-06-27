const { WooCommerce } = require("../../../wooCommerce");
const putApiCabezeraService = require("../../linx/apicabezera/putApiCabezera.service");
const getApiDatosService = require("../../linx/apidatos/getApiDatos.service");
const putApiDatosService = require("../../linx/apidatos/putApiDatos.service");

const postProductsBatchService = async (IDINTERNOAPICABEZERA, TIPODATO) => {
    // pongo en 2 procesando
    try {

        await putApiCabezeraService({
            where: { IDINTERNOAPICABEZERA: IDINTERNOAPICABEZERA },
            fields: { ACTUALIZANDO: 2 }
        });

    } catch (error) {
        console.error('Error en postProductsBatchService:', error);
    }
    const articulos = await getApiDatosService({ IDINTERNOAPICABEZERA, TIPODATO })
    if (articulos && articulos.apiDatos.records != 0) {
        // armo el objeto que paso a la api
        const create = articulos.apiDatos.data
            .filter(articulo => articulo.IDPUBLICADO === "0")
            .map(articulo => ({
                name: articulo.DESCRIPCION,
                sku: articulo.SKU,
                stock_quantity: articulo.CANTIDAD,
                price: articulo.PRECIOPUPLICADO,
                regular_price: articulo.PRECIOREAL,
                catalog_visibility: articulo.ACTIVO===1? 'visible' : 'hidden'
            })
            )
        const update = articulos.apiDatos.data
            .filter(articulo => articulo.IDPUBLICADO !== "0")
            .map(articulo => ({
                id: articulo.IDPUBLICADO,
                name: articulo.DESCRIPCION,
                sku: articulo.SKU,
                stock_quantity: articulo.CANTIDAD,
                price: articulo.PRECIOPUPLICADO,
                regular_price: articulo.PRECIOREAL,
                catalog_visibility: articulo.ACTIVO===1? 'visible' : 'hidden'
            })
            )

        const data = {
            create: create,
            update: update
        }

        try {
            const response = await WooCommerce.post("products/batch", data)
            console.log(response.data)
            //leo objeto devuelto
            if (response.data.create) {
                const actualizaId = response.data.create.forEach(product => {
                    putApiDatosService({
                        where: { SKU: product.sku },
                        fields: {
                            IDPUBLICADO: product.id,
                            LINK: product.permalink,
                        }
                    })
                });
                await Promises.all(actualizaId)
                
            }

        } catch (error) {
            console.error('Error en postProductsBatchService:', error);
        }
    }

    // pongo en 0 procesando
    try {

        await putApiCabezeraService({
            where: { IDINTERNOAPICABEZERA: IDINTERNOAPICABEZERA },
            fields: { ACTUALIZANDO: 0 }
        })

    } catch (error) {
        console.error('Error en postProductsBatchService:', error);
    }

    return

};

module.exports = postProductsBatchService;
