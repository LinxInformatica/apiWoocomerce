const { Router } = require("express");
const router = Router();

const familiasRouter = require("./linx/familias.route.js");
const articulosRouter = require("./linx/articulos.route.js");
const productsRouter = require("./wooCommerce/products.route.js");

//local
router.use(familiasRouter);
router.use(articulosRouter)

// wooCommerce
router.use(productsRouter)

module.exports = router;
