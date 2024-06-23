const { Router } = require('express');
const getProductByIdController = require('../../controllers/wooCommerce/products/getProductById.controller');
const getProductsController = require('../../controllers/wooCommerce/products/getProducts.controller');

// controllers

const productsRouter = Router();

productsRouter.get('/products', getProductsController);
productsRouter.get('/products/:id', getProductByIdController);

module.exports = productsRouter;
