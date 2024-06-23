const { WooCommerce } = require("../../../wooCommerce");

const getProductByIdService = async (id) => {

    const response = await WooCommerce.get(`products/${id}`)

    if(response.data){
        const product={
            id:response.data.id,
            name:response.data.name,
            sku:response.data.sku,
            status:response.data.status,
            stock_quantity:response.data.stock_quantity,
            price:response.data.price,
            regular_price:response.data.regular_price
        }
        const wcProducts={
            records:1,
            data:product
        }
        return {wcProducts}
        
    }else{
        return {error:`Ningun registro encontrado con el id ${id}`}
    }        
    
};

module.exports = getProductByIdService;
