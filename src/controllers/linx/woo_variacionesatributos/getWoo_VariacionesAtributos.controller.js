const getWoo_VariacionesAtributosService = require("../../../services/linx/woo_variacionesatributos/getWoo_VariacionesAtributos.service");

const getWoo_VariacionesAtributosController = async (req, res) => {
  try {
    const response = await getWoo_VariacionesAtributosService(req.query);
    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getWoo_VariacionesAtributosController;
