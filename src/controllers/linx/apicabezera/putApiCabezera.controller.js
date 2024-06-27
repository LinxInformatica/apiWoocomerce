const putApiCabezeraService = require("../../../services/linx/apicabezera/putApiCabezera.service");

const putApiCabezeraController = async (req, res) => {
  try {
    const {where,fields}=req.body
    const response = await putApiCabezeraService(where,fields);
    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error});
  }
};

module.exports = putApiCabezeraController;
