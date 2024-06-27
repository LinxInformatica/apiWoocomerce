const {ApiDatos} = require('../../../db');

const { Op } = require('sequelize');

const putApiDatosService = async (params = {}) => {
    const {where,fields}=params
    console.log(where,fields)
    //
    // filtros
    await ApiDatos.update(
        fields,
        {
            where: where
        },
    );

    return { ApiDatos };
};

module.exports = putApiDatosService;
