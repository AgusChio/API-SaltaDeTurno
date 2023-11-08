const tiposMedicamentosDTO = (tipoMedicamento) => {
    return {
        id:tipoMedicamento._id,
        tipoMedicamento:tipoMedicamento.tipoMedicamento,
        descripcion:tipoMedicamento.descripcion,
    };
}