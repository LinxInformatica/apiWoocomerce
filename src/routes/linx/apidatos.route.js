const { Router } = require('express');
const getApiDatosController = require('../../controllers/linx/apidatos/getApiDatos.controller');


// controllers

const apiDatosRouter = Router();

apiDatosRouter.get('/apiDatos', getApiDatosController);

module.exports = apiDatosRouter;
