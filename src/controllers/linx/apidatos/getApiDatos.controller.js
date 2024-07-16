const getApiDatosService = require("../../../services/linx/apidatos/getApiDatos.service");

const getApiDatossController = async (req, res) => {
  try {
    
    const response = await getApiDatosService(req.query);
    res.status(200).json(response);

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error});
  }
};

module.exports = getApiDatossController;
