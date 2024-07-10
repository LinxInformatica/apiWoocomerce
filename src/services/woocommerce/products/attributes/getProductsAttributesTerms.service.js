const normalizeAttributesTerms = require("../../../../utils/normalizeAttributesTerms");
const { WooCommerce } = require("../../../../wooCommerce");

const getProductsAttributesTermsService = async (params={}) => {

    const {id,attribute_id,page,per_page}=params
    
    const response = await WooCommerce.get(`products/attributes/${id}/terms`)
    
    const attributtes=response.data.map((attribute)=>normalizeAttributesTerms(attribute))
    
    const wcAttributesTerms={
        records:attributtes.length,
        data:attributtes
    }
    return {wcAttributesTerms}

    
};

module.exports = getProductsAttributesTermsService;
