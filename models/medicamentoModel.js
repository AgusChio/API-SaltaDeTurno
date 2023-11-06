import mongoose from "mongoose";

const medicamentoSchema = new mongoose.Schema({
    nombreComercial: { type: String, required: true },
    descripcion: { type: String, required: true },
    principioActivo: { type: String, required: true },
    presentacion: { type: String, required: true },
    cantidad: { type: String, required: true },
    codigoNacional: { type: String, required: true },
    categoria: { type: String, required: true },
});

const Medicamento = mongoose.model('Medicamento', medicamentoSchema);

export default Medicamento