const { Router } = require('express');
const getProductsController = require('../../controllers/wooCommerce/products/getProducts.controller');

// controllers

const productsRouter = Router();

productsRouter.get('/products', getProductsController);

module.exports = productsRouter;
