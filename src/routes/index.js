const { Router } = require("express");
const router = Router();

const familiasRouter = require("./familias.route.js");
const articulosRouter = require("./articulos.route.js")

router.use(familiasRouter);
router.use(articulosRouter)

module.exports = router;
