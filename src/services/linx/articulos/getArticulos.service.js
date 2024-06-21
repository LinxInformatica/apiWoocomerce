const { Articulos } = require('../../../db');
const { Op } = require('sequelize');

const getArticulosService = async (parameters = {}) => {
  //
  // filtros
  const found = await Articulos.findAll();
  const count = found.length;
  const articulos = {
    records:count,
    data: found,
  };
  return { articulos };
};

module.exports = getArticulosService;
