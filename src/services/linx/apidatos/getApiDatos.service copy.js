const { ApiDatos, ApiCabezera, SArticulosAtributos } = require('../../../db');

const { Op } = require('sequelize');

const getApiDatosService = async (params = {}) => {
    //
    // filtros
    let filtro = []
    const { IDINTERNOAPICABEZERA, TIPODATO, SKU, IDPUBLICADO} = params;
    if (SKU) {
        filtro.push({ SKU })
    }
    if (IDPUBLICADO) {
        filtro.push({ IDPUBLICADO })
    }
    if (IDINTERNOAPICABEZERA) {
        filtro.push({ IDINTERNOAPICABEZERA })
    }
    if (TIPODATO) {
        filtro.push({ TIPODATO })
    }
    
    // filtro.push({IDINTERNOVARIACION: {[Op.eq]:0}}) //solo articulos, no variacionesd

    //busqueda
    const found = await ApiDatos.findAll(
        {
            attributes: [
                'IDINTERNODATO',
                'SKU',
                'IDPUBLICADO',
                'DESCRIPCION',
                'CANTIDAD',
                'PRECIOREAL',
                'PRECIOPUBLICADO',
                'ACTIVO',
                'LINK'
            ],
            include: [
                {
                    model: ApiDatos,
                    as: 'Variaciones',
                    attributes: [
                        'IDINTERNODATO',
                        'IDINTERNOVARIACION',
                        'SKU',
                        'IDPUBLICADO',
                        'DESCRIPCION',
                        'CANTIDAD',
                        'PRECIOREAL',
                        'PRECIOPUBLICADO',
                        'ACTIVO',
                        'LINK'
                    ],
                    include: [
                        {
                            attributes: [
                                'IDATRIBUTO'
                            ],
                            model: SArticulosAtributos,
                            as: 'Atributos',
                            include: [
                                {
                                    attributes: [
                                        'SKU',
                                        'IDPUBLICADO',
                                        'DESCRIPCION',
                                    ],
                                    model: ApiDatos,
                                    as: 'AtributosLeyenda'
                                }
                            ]
                        }
                    ]
                }
            ],
            where: filtro
        });

    //armado de objeto de salida    
    const count = found.length;
    const apiDatos = {
        records: count,
        fitler:filtro,
        data: found,
    };
    return { apiDatos };
};

module.exports = getApiDatosService;
