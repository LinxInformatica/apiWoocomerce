const { NORMALIZEPRODUCTS } = process.env

const normalizeProducts = (product) => {
    console.log(NORMALIZEPRODUCTS)
    if (NORMALIZEPRODUCTS===true) {
        return {
            id: product.id,
            name: product.name,
            sku: product.sku,
            status: product.status,
            stock_quantity: product.stock_quantity,
            price: product.price,
            regular_price: product.regular_price,
            variations: product.variations
        }
    }
    return {product}
};

module.exports = normalizeProducts;
