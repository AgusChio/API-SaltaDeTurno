const farmaciaDTO = (farmacia) => {
    return {
        id: farmacia._id,
        nombre: farmacia.nombre,
        direccion: farmacia.direccion,
        telefono: farmacia.telefono,
        ubicacion: farmacia.ubicacion,
        horario: farmacia.horario,
        estado: farmacia.estado,
        abierto24Horas: farmacia.abierto24Horas,
        turnos: farmacia.turnos,
        imagen: farmacia.imagen,
        Zona: farmacia.Zona,
    };
}

export default farmaciaDTO;
