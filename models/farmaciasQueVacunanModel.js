import mongoose from "mongoose";

const farmaciasQueVacunanSchema = new mongoose.Schema({
    farmacia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia',
        required: true
    },
    direccion: { type: String, required: true },
    urlMapa: { type: String, required: true },
    vacuna: { type: String, required: true },
});

const FarmaciasQueVacunan = mongoose.model('FarmaciasQueVacunan', farmaciasQueVacunanSchema);

export default FarmaciasQueVacunan