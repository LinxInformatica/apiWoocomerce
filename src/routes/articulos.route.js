const { Router } = require('express');
const getArticulosController = require('../controllers/articulos/getArticulos.controller');


// controllers

const articulosRouter = Router();

articulosRouter.get('/articulos', getArticulosController);

module.exports = articulosRouter;
