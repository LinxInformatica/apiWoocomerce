const { Router } = require("express");
const router = Router();

const productsRouter = require("./wooCommerce/products.route.js");
const apiDatosRouter = require("./linx/apidatos.route.js");

//local
router.use(apiDatosRouter)

// wooCommerce
router.use(productsRouter)

module.exports = router;
