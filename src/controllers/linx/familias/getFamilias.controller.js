const getFamiliasService = require("../../../services/linx/familias/getFamilias.service");

const getFamiliasController = async (req, res) => {
  try {
    const { familia } = req.query;

    const response = await getFamiliasService();
    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getFamiliasController;
