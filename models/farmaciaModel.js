import mongoose from "mongoose";

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    maps: { type: String, required: true },
    horario: { type: String, required: true },
    imagen: { type: String, required: true },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia