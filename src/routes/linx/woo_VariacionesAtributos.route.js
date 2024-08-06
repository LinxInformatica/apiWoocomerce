const { Router } = require('express');
const getWoo_VariacionesAtributosController = require('../../controllers/linx/woo_variacionesatributos/getWoo_VariacionesAtributos.controller');


// controllers

const woo_VariacionesAtributosRouter = Router();

woo_VariacionesAtributosRouter.get('/variacionesatributos', getWoo_VariacionesAtributosController);

module.exports = woo_VariacionesAtributosRouter;
