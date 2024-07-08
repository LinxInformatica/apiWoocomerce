const { Router } = require('express');
const getApiCabezeraController = require('../../controllers/linx/apicabezera/getApiCabezera.controller');
const putApiCabezeraController = require('../../controllers/linx/apicabezera/putApiCabezera.controller');


// controllers

const apiCabezeraRouter = Router();

apiCabezeraRouter.get('/apiCabezera', getApiCabezeraController);

apiCabezeraRouter.put('/apiCabezera', putApiCabezeraController);

module.exports = apiCabezeraRouter;
