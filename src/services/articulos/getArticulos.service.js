const { Articulos } = require('../../db');
const { Op } = require('sequelize');

const getArticulosService = async (parameters = {}) => {
  //
  // filtros
  const found = await Articulos.findAll();
  console.log('pase por aca ')
  const count = found.length;
  const articulos = {
    records:count,
    data: found,
  };
  return { articulos };
};

module.exports = getArticulosService;
