const { WooCommerce } = require("../../../wooCommerce");
const normalizeProducts = require("../../../utils/normalizeProducts");

const getProductsService = async () => {

    const response = await WooCommerce.get("products")
    
    const products=response.data.map((product)=>normalizeProducts(product))

    const wcProducts={
        records:products.length,
        data:products
    }
    return {wcProducts}

    
};

module.exports = getProductsService;
