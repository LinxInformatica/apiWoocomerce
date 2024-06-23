const { WooCommerce } = require("../../../wooCommerce");

const postProductsService = async () => {

    const products=response.data.map((product)=>({
        id:product.id,
        name:product.name,
        sku:product.sku,
        status:product.status,
        stock_quantity:product.stock_quantity,
        price:product.price,
        regular_price:product.regular_price
    }))

    const response = await WooCommerce.get("products")
    
    
    const wcProducts={
        records:products.length,
        data:products
    }
    return {wcProducts}

    
};

module.exports = getProductsService;
