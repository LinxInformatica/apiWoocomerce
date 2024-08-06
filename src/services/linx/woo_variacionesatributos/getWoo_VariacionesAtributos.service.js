const { Woo_VariacionesAtributos } = require('../../../db');

const getWoo_VariacionesAtributosService = async (params = {}) => {
    //
    // filtros
    let filtro = []
    const { IDINTERNO, IDINTERNOVARIACION } = params;
    if (IDINTERNO) {
        filtro.push({ IDINTERNO })
    }
    if (IDINTERNOVARIACION) {
        filtro.push({ IDINTERNOVARIACION })
    }

    const found = await Woo_VariacionesAtributos.findAll({
        where: filtro
    });
    const count = found.length;
    return {
        records: count,
        data: found,
    };

};

module.exports = getWoo_VariacionesAtributosService;
