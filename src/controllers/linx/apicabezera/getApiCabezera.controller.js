const getApiCabezeraService = require("../../../services/linx/apicabezera/getApiCabezera.service");

const getApiCabezeraController = async (req, res) => {
  try {
    
    const response = await getApiCabezeraService(req.query);
    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error});
  }
};

module.exports = getApiCabezeraController;
