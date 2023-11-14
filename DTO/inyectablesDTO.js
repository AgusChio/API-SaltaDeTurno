const inyectablesDTO = (inyectable) => {
    return {
        id: inyectable._id,
        nombreInyectable: inyectable.nombreInyectable,
        principioActivo: inyectable.principioActivo,
        descripcion: inyectable.descripcion,
        imagen: inyectable.imagen
    }
}

export default inyectablesDTO;