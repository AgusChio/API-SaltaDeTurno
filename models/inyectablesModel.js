import mongoose from "mongoose";

const inyectablesSchema = new mongoose.Schema({
    nombreInyectable: { type: String, required: true },
    principioActivo: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const Inyectables = mongoose.model('Inyectables', inyectablesSchema);

export default Inyectables
