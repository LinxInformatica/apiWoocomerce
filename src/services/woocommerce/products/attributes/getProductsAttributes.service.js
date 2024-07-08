const { WooCommerce } = require("../../../../wooCommerce");

const getProductsAttributesService = async () => {

    const response = await WooCommerce.get("products/attributes")
    
    const attributtes=response.data //.map((product)=>normalizeProducts(product))
    console.log(response)
    const wcAttributes={
        records:attributtes.length,
        data:attributtes
    }
    return {wcAttributes}

    
};

module.exports = getProductsAttributesService;
