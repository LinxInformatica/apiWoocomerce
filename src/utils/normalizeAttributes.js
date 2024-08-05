const normalizeAttributes = (attribute) => {
    
    return { attribute }

    return {
        id: attribute.id,
        nombre: attribute.name,
    }
};

module.exports = normalizeAttributes;
