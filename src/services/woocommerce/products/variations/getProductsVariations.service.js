const { WooCommerce } = require("../../../wooCommerce");

const getProductsVariationsService = async () => {

    const response = await WooCommerce.get("products/variations")
    
    const products=response.data.map((product)=>normalizeProducts(product))

    const wcProducts={
        records:products.length,
        data:products
    }
    return {wcProducts}

    
};

module.exports = getProductsService;
