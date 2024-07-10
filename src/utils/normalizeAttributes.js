const normalizeAttributes = (attribute) => {
    
    //if (normalize) return { attribute }

    return {
        id: attribute.id,
        nombre: attribute.name,
    }
};

module.exports = normalizeAttributes;
