const { WooCommerce } = require("../../../wooCommerce");
const normalizeProducts = require("../../../utils/normalizeProducts");

const getProductByIdService = async (id) => {
    console.log(id)
    const response = await WooCommerce.get(`products/${id}`)
    if(response.data){
        const product=normalizeProducts(response.data)

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
