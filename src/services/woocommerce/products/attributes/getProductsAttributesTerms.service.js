const { WooCommerce } = require("../../../../wooCommerce");

const getProductsAttributesTermsService = async (params={}) => {

    const {id,attribute_id,page,per_page}=params
    
    const response = await WooCommerce.get(`products/attributes/${id}/terms`)
    
    const attributtes=response.data //.map((product)=>normalizeProducts(product))
    console.log(response)
    const wcAttributesTerms={
        records:attributtes.length,
        data:attributtes
    }
    return {wcAttributesTerms}

    
};

module.exports = getProductsAttributesTermsService;
