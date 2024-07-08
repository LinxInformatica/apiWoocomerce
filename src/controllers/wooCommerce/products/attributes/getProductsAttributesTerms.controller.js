const getProductsAttributesTermsService = require("../../../../services/woocommerce/products/attributes/getProductsAttributesTerms.service");

const getProductsAttributesTermsController = async (req, res) => {
  try {
    const {id,attribute_id,page,per_page}=req.query
    if(!page) page=1;

    const response = await getProductsAttributesTermsService({id,attribute_id,page,per_page});

    res.status(200).json(response);

  } catch (error) {
    
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = getProductsAttributesTermsController;
