const medicamentoDTO = (medicamento) => {
    return {
        id: medicamento._id,
        nombreComercial: medicamento.nombreComercial,
        descripcion: medicamento.descripcion,
        principioActivo: medicamento.principioActivo,
        presentacion: medicamento.presentacion,
        cantidad: medicamento.cantidad,
        codigoNacional: medicamento.codigoNacional,
        categoria: medicamento.categoria,
    };
}

export default medicamentoDTO;