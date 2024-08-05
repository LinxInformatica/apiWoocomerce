const getProductByIdService = require("../../../services/woocommerce/products/getProductById.service");

const getProductByIdController = async (req, res) => {
  try {
    const {id} = req.params
    if (!id) return res.status(404).json({ error: 'No se ingreso el Id'});

    const response = await getProductByIdService(id);

    res.status(200).json(response);

  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

module.exports = getProductByIdController;
