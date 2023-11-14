import mongoose from "mongoose";

const medicamentoSchema = new mongoose.Schema({
    nombreComercial: { type: String, required: true },
    descripcion: { type: String, required: true },
    principioActivo: { type: String, required: true },
    presentacion: { type: String, required: true },
    cantidad: { type: String, required: true },
    codigoNacional: { type: String, required: true },
    tipoMedicamento: {
        type: String,
        required: true,
        enum: ['Analgésicos', 'Antialérgicos', 'Antidiarreicos', 'Antiinfecciosos', 'Antiinflamatorios', 'Antipiréticos']
    },
    categoria: { 
        type: String, 
        required: true, 
        enum: ['Venta libre', 'Bajo receta']
    },
});

const Medicamento = mongoose.model('Medicamento', medicamentoSchema);

export default Medicamento