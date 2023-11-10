import mongoose from "mongoose";

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    ubicacion: { type: String, required: true },
    horario: {
        semana: {
            dias: { type: String, required: false },
            apertura: { type: String, required: false },
            cierre: { type: String, required: false }
        },
        finDeSemana: {
            dias: { type: String, required: false },
            apertura: { type: String, required: false },
            cierre: { type: String, required: false }
        }
    },
    estado:{
        type: String,
        required: true,
        enum: ['Activo', 'Cerrado Permanentemente']
    },
    abierto24Horas: { type: Boolean, default: false },
    deTurno24Horas: { type: Date, required: true },
    imagen: { type: String, required: false },
    Zona: {
        type: String,
        required: true,
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia