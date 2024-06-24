const { Router } = require('express');
const getApiCabezeraController = require('../../controllers/linx/apicabezera/getApiCabezera.controller');


// controllers

const apiCabezeraRouter = Router();

apiCabezeraRouter.get('/apiCabezera', getApiCabezeraController);

module.exports = apiCabezeraRouter;
