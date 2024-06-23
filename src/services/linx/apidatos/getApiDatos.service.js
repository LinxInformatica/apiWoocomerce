const {ApiDatos} = require('../../../db');

const { Op } = require('sequelize');

const getApiDatosService = async (params = {}) => {
  //
  // filtros
  let filtro=[]
  const {IDINTERNOAPICABEZERA,TIPODATO} =params;
  if (IDINTERNOAPICABEZERA) {
    filtro.push({IDINTERNOAPICABEZERA:IDINTERNOAPICABEZERA})
  }
  if (TIPODATO) {
    filtro.push({TIPODATO:TIPODATO})
  }

  const found = await ApiDatos.findAll({where:filtro});
  const count = found.length;
  const apiDatos = {
    records:count,
    data: found,
  };
  return { apiDatos };
};

module.exports = getApiDatosService;
