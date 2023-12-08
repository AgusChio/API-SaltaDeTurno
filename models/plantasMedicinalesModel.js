import mongoose from "mongoose";

const plantasMedicinalesSchema = new mongoose.Schema({
    nombreLocal: { type: String, required: true },
    aplicacionTerapeutica: { type: String, required: true },
    preparacionYAdministracion: { type: String, required: true },
    organosVegetalesEmpleados: { type: String, required: true },
    categorias: [{
        type: String,
        enum: [
            'Digestivas',
            'Expectorantes', 
            'Diuréticas', 
            'Dérmicas', 
            'Hepáticas', 
            'Antiinflamatorias', 
            'Analgésicas', 
            'Expectorante'
        ],
        required: true
    }]
});

const PlantasMedicinales = mongoose.model('PlantasMedicinales', plantasMedicinalesSchema);

export default PlantasMedicinales