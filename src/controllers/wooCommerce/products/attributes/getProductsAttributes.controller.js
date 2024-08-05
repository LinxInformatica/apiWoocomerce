const getProductsAttributesService = require("../../../../services/woocommerce/products/attributes/getProductsAttributes.service");

const getProductsAttributesController = async (req, res) => {
  try {

    const response = await getProductsAttributesService();

    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getProductsAttributesController;
