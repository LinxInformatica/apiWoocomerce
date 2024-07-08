const { Router } = require('express');
const getProductsAttributesController = require('../../controllers/wooCommerce/products/attributes/getProductsAttributes.controller');

// controllers

const productsAttributesRouter = Router();

productsAttributesRouter.get('/products/attributes', getProductsAttributesController);

module.exports = productsAttributesRouter;
