const normalizeProducts = (product) => {
    return {
        id:product.id,
        name:product.name,
        sku:product.sku,
        status:product.status,
        stock_quantity:product.stock_quantity,
        price:product.price,
        regular_price:product.regular_price,
        variations:product.variations
    }
};

module.exports = normalizeProducts;
