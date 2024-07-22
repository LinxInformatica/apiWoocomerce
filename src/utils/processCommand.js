
const { Op } = require('sequelize');
const getApiCabezeraService = require('../services/linx/apicabezera/getApiCabezera.service');
const postProductsBatchService = require('../services/woocommerce/products/postProductsBatch.service');

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
                    await postProductsBatchService(IDINTERNOAPICABEZERA)
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
