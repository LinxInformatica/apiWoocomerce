const getArticulosService = require("../../../services/linx/articulos/getArticulos.service");


const getArticulosController = async (req, res) => {
  try {
    
    const response = await getArticulosService();
    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getArticulosController;
