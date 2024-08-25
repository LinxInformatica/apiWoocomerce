const normalizeProducts = (product, normalize) => {
    //return { product }

    return {
        id: product.id,
        name: product.name,
        sku: product.sku,
        status: product.status,
        stock_quantity: product.stock_quantity,
        price: product.price,
        regular_price: product.regular_price,
        variations: product.variations,
        attributes: product.attributes,
        default_attributes: product.default_attributes,
        permalink:product.permalink
    }
};

module.exports = normalizeProducts;
