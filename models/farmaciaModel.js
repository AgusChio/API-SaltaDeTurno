

const farmaciaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    ubicacion: { type: String, required: true },
    aperturaMañana: { type: String, required: false },
    cierreMedioDia: { type: String, required: false },
    aperturaTarde: { type: String, required: false },
    cierreNocturno: { type: String, required: false },
    abierto24Horas: { type: Boolean, default: false },
    deTurno24Horas: {type: Date, required: true},
    imagen: { type: String, required: true },
    Zona: { 
        type: String, 
        required: true, 
        enum: ['Norte', 'Sur', 'Este', 'Oeste', 'Centro']
    },
});

const Farmacia = mongoose.model('Farmacia', farmaciaSchema);

export default Farmacia