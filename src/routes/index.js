const { Router } = require("express");
const router = Router();

const productsRouter = require("./wooCommerce/products.route.js");
const apiDatosRouter = require("./linx/apidatos.route.js");
const apiCabezeraRouter = require("./linx/apicabezera.route.js");
const productsAttributesRouter = require("./wooCommerce/productsAttributes.route.js");
const productsAttributesTermsRouter = require("./wooCommerce/productsAttributesTerms.route.js");

//local
router.use(apiDatosRouter)
router.use(apiCabezeraRouter)

// wooCommerce
router.use(productsAttributesTermsRouter)
router.use(productsAttributesRouter)
router.use(productsRouter)

module.exports = router;
