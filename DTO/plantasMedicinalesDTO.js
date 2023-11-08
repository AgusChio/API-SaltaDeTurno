const plantasMedicinalesDTO = (plantaMedicinal) => {
    return {
        nombreLocal: plantaMedicinal.nombreLocal,
        aplicacionTerapeutica: plantaMedicinal.aplicacionTerapeutica,
        preparacionYAdministracion: plantaMedicinal.preparacionYAdministracion,
        organosVegetalesEmpleados: plantaMedicinal.organosVegetalesEmpleados,
        categorias: plantaMedicinal.categorias
    }
}