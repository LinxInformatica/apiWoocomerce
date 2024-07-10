const normalizeAttributes = require("../../../../utils/normalizeAttributes");
const { WooCommerce } = require("../../../../wooCommerce");

const getProductsAttributesService = async () => {

    const response = await WooCommerce.get("products/attributes")
    
    const attributtes=response.data.map((attribute)=>normalizeAttributes(attribute))

    const wcAttributes={
        records:attributtes.length,
        data:attributtes
    }
    return {wcAttributes}

    
};

module.exports = getProductsAttributesService;
