const { Router } = require('express');
const getArticulosController = require('../../controllers/linx/articulos/getArticulos.controller');


// controllers

const articulosRouter = Router();

articulosRouter.get('/articulos', getArticulosController);

module.exports = articulosRouter;
