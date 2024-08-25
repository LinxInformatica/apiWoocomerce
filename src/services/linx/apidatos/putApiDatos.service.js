const {ApiDatos} = require('../../../db');

const { Op } = require('sequelize');

const putApiDatosService = async (params = {}) => {
    const {where,fields}=params
    //
    // filtros
    await ApiDatos.update(
        fields,
        {
            where: where
        },
    );
    console.log(fields,'Actualizado OK!')
    return { ApiDatos };
};

module.exports = putApiDatosService;
