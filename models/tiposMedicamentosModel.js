import mongoose from "mongoose";

const tiposMedicamentosSchema = new mongoose.Schema({
    tipoMedicamento: { type: String, required: true },
    descripcion: { type: String, required: true },
});

const TiposMedicamentos = mongoose.model('TiposMedicamentos', tiposMedicamentosSchema);

export default TiposMedicamentos