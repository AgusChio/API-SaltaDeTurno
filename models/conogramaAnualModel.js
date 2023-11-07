import mongoose from "mongoose";

const conogramaAnualSchema = new mongoose.Schema({
    mes: { type: String, required: true, enum: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] },
    dia: { type: Number, required: true }, 
    farmacia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia',
        required: true
    },
    zona: {
        type: String,
        required: true,
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const CronogramaAnual = mongoose.model('CronogramaAnual', conogramaAnualSchema);

export default CronogramaAnual