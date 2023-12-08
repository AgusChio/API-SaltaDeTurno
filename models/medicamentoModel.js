import mongoose from "mongoose";

const medicamentoSchema = new mongoose.Schema({
    nombreComercial: { type: String, required: true },
    descripcion: { type: String, required: true },
    principioActivo: { type: String, required: true },
    presentacion: { type: String, required: true },
    cantidad: { type: String, required: true },
    codigoNacional: { type: String, required: false },
    atc: { type: String, required: false },
    tipoMedicamento: {
        type: [{
            type: String,
            enum: ['Analgésicos',
            'Antiácidos',
            'Antialérgicos',
            'Antidiarreicos',
            'Antiinfecciosos', 
            'Antiinflamatorios', 
            'Antiespasmódicos',
            'Antiespasmódico',
            'Antipiréticos',
            'Antisépticos',
            'Agentes activos sobre el sistema renina-angiotensina',
            'Agentes modificadores de los lípidos',
            'Agentes para el tratamiento de alteraciones causadas por ácidos',
            'Antidiabéticos',
            'Digestivos',
            'Desinfectantes',
            'Psicolépticos',
            'Bloqueantes del canal de calcio',
            'Terapia tiroidea',
            'Psicoanalépticos',
            'Oftalmológicos',
            'Analgésicos',
            'Corticosteroides para uso sistémico',
            'Antiepilépticos',
            'Antibacterianos para uso sistémico',
            'Anestésicos',
            'Inmunosupresores',
            'Antineoplásicos',
            'Agentes antitrombóticos',
            'Inmunoestimulantes',
            'Preparados contra el acné',
            'Agentes contra padecimientos obstructivos de las vías respiratorias',
            'Cremas terapéuticas',
        ]
        }],
        required: true,
    },
    categoria: { 
        type: String, 
        required: true, 
        enum: ['Venta libre', 'Bajo receta']
    },
});

const Medicamento = mongoose.model('Medicamento', medicamentoSchema);

export default Medicamento