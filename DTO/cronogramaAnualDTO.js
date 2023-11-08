const cronogramaAnualService = (cronogramaAnual) => {
    return {
    id: cronogramaAnual._id,
    mes: cronogramaAnual.mes,
    dia: cronogramaAnual.dia,
    farmacia: cronogramaAnual.farmacia,
    zona: cronogramaAnual.zona,
    };
}
