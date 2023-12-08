import mongoose from "mongoose";

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: false },
    ubicacion: { type: String, required: false },
    horario: {
        semana: {
            dias: { type: String, required: false },
            apertura: { type: String, required: false },
            cierre: { type: String, required: false },
            apertura2: { type: String, required: false },
            cierre2: { type: String, required: false },
        },
        finDeSemana: {
            dias: { type: String, required: false },
            apertura: { type: String, required: false },
            cierre: { type: String, required: false },
            dias2: { type: String, required: false },
            apertura2: { type: String, required: false },
            cierre2: { type: String, required: false },
            cerrado: { type: Boolean, required: false },
        },
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Cerrado Permanentemente']
    },
    abierto24Horas: { type: Boolean, default: false },
    turnos: {
        type: Map,
        of: [Date]
    },
    imagen: { type: String, required: false },
    Zona: {
        type: String,
        required: true,
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia;
