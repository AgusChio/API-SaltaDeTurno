import mongoose from "mongoose";

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    maps: { type: String, required: true },
    horario: [{
        dia: { type: String, required: true },
        apertura: { type: String, required: true },
        cierre: { type: String, required: true }
    }],
    imagen: { type: String, required: true },
    Zona: { 
        type: String, 
        required: true, 
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia