const normalizeAttributesTerms = require("../../../../utils/normalizeAttributesTerms");
const { WooCommerce } = require("../../../../wooCommerce");

const getProductsAttributesTermsService = async (params={}) => {

    let {id,attribute_id,page,per_page}=params
    if(!page) page=1
    if(!per_page) per_page=100

    const response = await WooCommerce.get(`products/attributes/${id}/terms?page=${page}&per_page=${per_page}`)
    
    const attributtes=response.data.map((attribute)=>normalizeAttributesTerms(attribute))
    
    const wcAttributesTerms={
        records:attributtes.length,
        data:attributtes
    }
    return {wcAttributesTerms}

    
};

module.exports = getProductsAttributesTermsService;
