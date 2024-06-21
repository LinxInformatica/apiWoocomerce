const { Router } = require('express');
const getFamiliasController = require('../../controllers/linx/familias/getFamilias.controller');



// controllers

const familiasRouter = Router();

familiasRouter.get('/familias', getFamiliasController);

module.exports = familiasRouter;
