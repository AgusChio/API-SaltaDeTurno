const farmaciaDTO = (farmacia) => {
    return {
        id: farmacia._id,
        nombre: farmacia.nombre,
        direccion: farmacia.direccion,
        telefono: farmacia.telefono,
        maps: farmacia.maps,
        horario: farmacia.horario,
        imagen: farmacia.imagen
    };
}

export default farmaciaDTO;
