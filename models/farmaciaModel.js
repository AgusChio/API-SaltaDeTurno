import mongoose from "mongoose";

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    maps: { type: String, required: true },
    horario: [{
        dias: [{ type: String, required: true }],
        horarios: [{
            apertura: { type: String, required: true },
            cierre: { type: String, required: true }
        }]
    }],
    turno: {type: Date, required: true},
    deTurno: { type: Boolean, default: false },
    imagen: { type: String, required: true },
    Zona: { 
        type: String, 
        required: true, 
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia