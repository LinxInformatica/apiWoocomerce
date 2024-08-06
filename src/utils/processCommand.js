
const { Op } = require('sequelize');
const getApiCabezeraService = require('../services/linx/apicabezera/getApiCabezera.service');
const postProductsBatchService = require('../services/woocommerce/products/postProductsBatch.service');
const postProductsVariationsBatchService = require('../services/woocommerce/products/variations/postProductsVariationsBatch.service');
const processControl = require('./processControl');

const processCommand = async () => {
    const params = { ACTUALIZANDO: 1, ACTIVA: 1 }
    const pendientes = await getApiCabezeraService(params)
    
    if (!pendientes) return;
    if (pendientes.apiCabezera.records==0) return;

    const { ACTUALIZANDO, COMANDO, IDINTERNOAPICABEZERA } = pendientes.apiCabezera.data[0]

    if (ACTUALIZANDO && (ACTUALIZANDO == 1 && COMANDO)) {
        const comando = COMANDO.split('/')
        switch (comando[0]) {
            case 'postProductsBatch':
                try {
                    const SKU=comando[1]
                    // pongo a 2 el valor de actualizando
                    await processControl(IDINTERNOAPICABEZERA,2)

                    // post de los productos
                    await postProductsBatchService(IDINTERNOAPICABEZERA,SKU)

                    // post de variaciones
                    await postProductsVariationsBatchService(IDINTERNOAPICABEZERA,SKU)

                    // pongo a 0 el valor de actalizando
                    await processControl(IDINTERNOAPICABEZERA,0)

                } catch (error) {
                    console.error('Error en procesarPendientes:', error);
                } finally {
                    break;
                }
            default:
                break
        }
        // await procesarPendientes()

    };
};

module.exports = processCommand;
