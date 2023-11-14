const farmaciasQueVacunanDTO = (farmaciaQueVacuna) => {
    return {
        id: farmaciaQueVacuna._id,
        farmacia: farmaciaQueVacuna.farmacia,
        direccion: farmaciaQueVacuna.direccion,
        urlMapa: farmaciaQueVacuna.urlMapa,
        vacuna: farmaciaQueVacuna.vacuna,
    };
}

export default farmaciasQueVacunanDTO;