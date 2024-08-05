const getProductsService = require("../../../services/woocommerce/products/getProducts.service");

const getProductsController = async (req, res) => {
  try {

    const response = await getProductsService(req.query);

    res.status(200).json(response);

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getProductsController;
