const { Router } = require('express');
const getProductsAttributesTermsController = require('../../controllers/wooCommerce/products/attributes/getProductsAttributesTerms.controller');

// controllers

const productsAttributesTermsRouter = Router();

productsAttributesTermsRouter.get('/products/attributes/terms', getProductsAttributesTermsController);

module.exports = productsAttributesTermsRouter;
