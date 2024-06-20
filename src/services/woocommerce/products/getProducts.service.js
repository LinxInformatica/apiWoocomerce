const { Familias } = require('../../db');
const { Op } = require('sequelize');

const getFamiliasService = async (parameters = {}) => {
  //
  // filtros
  const found = await Familias.findAll(
  );

  const count = found.length;
  const familias = {
    records:count,
    data: found,
  };
  return { familias };
};

module.exports = getFamiliasService;
