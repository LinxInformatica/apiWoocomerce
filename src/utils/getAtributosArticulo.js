const getAtributosArticulo = (articulo) => {
    if (articulo.VariacionAtributos && articulo.VariacionAtributos.length > 0) {
        // armo el objeto con OPTION una por cada atributo
        return articulo.VariacionAtributos.map(atributo => {
            return {
                id: parseInt(atributo.IDATRIBUTOPADRE),
                name: atributo.ATRIBUTOPADRE,
                option: atributo.ATRIBUTO
            }
        })
    }
    if (articulo.ArticuloAtributos && articulo.ArticuloAtributos.length !== 0) {
        //armo el objeto con options, una por cada atributo agrupando por atributo padre
        const result = articulo.ArticuloAtributos.reduce((accumulator, currentValue) => {
            let existePadre = accumulator.find(padre => padre.id === currentValue.IDATRIBUTOPADRE)
            if (existePadre) {
                existePadre.options.push(currentValue.ATRIBUTO)
            } else {
                accumulator.push({
                    id: parseInt(currentValue.IDATRIBUTOPADRE),
                    name: currentValue.ATRIBUTOPADRE,
                    visible: true,
                    variation: true,
                    options: [currentValue.ATRIBUTO]
                })
            }
            return accumulator
        }, [])

        return result
    }
    return []
};

module.exports = getAtributosArticulo;
