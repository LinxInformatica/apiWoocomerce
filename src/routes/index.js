const { Router } = require("express");
const router = Router();

const productsRouter = require("./wooCommerce/products.route.js");
const apiDatosRouter = require("./linx/apidatos.route.js");
const apiCabezeraRouter = require("./linx/apicabezera.route.js");

//local
router.use(apiDatosRouter)
router.use(apiCabezeraRouter)
// wooCommerce
router.use(productsRouter)

module.exports = router;
