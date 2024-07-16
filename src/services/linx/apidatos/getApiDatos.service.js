const { ApiDatos, ApiCabezera, SArticulosAtributos } = require('../../../db');

const { Op } = require('sequelize');

const getApiDatosService = async (params = {}) => {
    //
    // filtros
    let filtro = []
    const { IDINTERNOAPICABEZERA, TIPODATO, SKU, IDPUBLICADO } = params;
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
                            model: SArticulosAtributos,
                            as: 'apidatos_articulosAtributos',
                            include: [
                                {
                                    model: ApiDatos,
                                    as: 'articulosatributos_atributos'
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
        data: found,
    };
    return { apiDatos };
};

module.exports = getApiDatosService;
