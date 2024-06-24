const {ApiCabezera} = require('../../../db');

const { Op } = require('sequelize');

const getApiCabezeraService = async (params = {}) => {
  //
  // filtros
  let filtro=[]
  const {ACTUALIZANDO,ACTIVA} =params;
  if (ACTUALIZANDO) {
    filtro.push({ACTUALIZANDO:ACTUALIZANDO})
  }
  if (ACTIVA) {
    filtro.push({ACTIVA:ACTIVA})
  }
  
  const found = await ApiCabezera.findAll({where:filtro});
  const count = found.length;
  const apiCabezera = {
    records:count,
    data: found,
  };
  return { apiCabezera };
};

module.exports = getApiCabezeraService;
