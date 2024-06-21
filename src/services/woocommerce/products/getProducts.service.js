const { WooCommerce } = require("../../../wooCommerce");

const getProductsService = async () => {

    const response = await WooCommerce.get("products")
    const products=response.data.map((product)=>({
        id:product.id,
        name:product.name,
        sku:product.sku,
        status:product.status,
        stock_quantity:product.stock_quantity,
        price:product.price,
        regular_price:product.regular_price
    }))
    const wcProducts={
        records:products.length,
        data:products
    }
    return {wcProducts}

    
};

module.exports = getProductsService;
