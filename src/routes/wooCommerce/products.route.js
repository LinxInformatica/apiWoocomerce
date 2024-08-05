const { Router } = require('express');
const getProductByIdController = require('../../controllers/wooCommerce/products/getProductById.controller');
const getProductsController = require('../../controllers/wooCommerce/products/getProducts.controller');

// controllers

const productsRouter = Router();

productsRouter.get('/products/:id', getProductByIdController);
productsRouter.get('/products', getProductsController);

module.exports = productsRouter;
