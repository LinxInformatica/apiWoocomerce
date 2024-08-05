const putApiCabezeraService = require("../services/linx/apicabezera/putApiCabezera.service");

const processControl = async (IDINTERNOAPICABEZERA,ACTUALIZANDO) => {
    // pongo en 2 procesando
    try {

        await putApiCabezeraService({
            where: { IDINTERNOAPICABEZERA},
            fields: { ACTUALIZANDO }
        });

    } catch (error) {
        console.error('Error en ACTUALIZACION DE PROCESO', error);
    }
    return

};

module.exports = processControl;
