import plantasMedicinalesService from "../services/plantasMedicinalesService";
import plantasMedicinalesDTO from "../DTO/plantasMedicinalesDTO";
import plantasMedicinales from "../models/plantasMedicinalesModel";

const plantasMedicinalesController = {
    async getAllPlantasMedicinales(req, res) {
        try {
            const plantasMedicinales = await plantasMedicinalesService.getAllPlantasMedicinales();
            const plantasMedicinalesDTO = plantasMedicinales.map((plantaMedicinal) => plantasMedicinalesDTO(plantaMedicinal));
            return res.status(200).json(plantasMedicinalesDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getPlantaMedicinalById(req, res) {
        try {
            const plantaMedicinal = await plantasMedicinalesService.getById(req.params.id);
            if (!plantaMedicinal) return res.status(404).json({ message: "PlantaMedicinal not found" });
            const plantaMedicinalDTO = plantasMedicinalesDTO(plantaMedicinal);
            return res.status(200).json(plantaMedicinalDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createPlantaMedicinal(req, res) {
        try {
            const plantaMedicinal = await plantasMedicinalesService.createPlantaMedicinal(req.body);
            const plantaMedicinalDTO = plantasMedicinalesDTO(plantaMedicinal);
            return res.status(201).json(plantaMedicinalDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async updatePlantaMedicinal(req, res) {
        try {
            const plantaMedicinal = await plantasMedicinalesService.updatePlantaMedicinal(req.params.id, req.body);
            const plantaMedicinalDTO = plantasMedicinalesDTO(plantaMedicinal);
            return res.status(200).json(plantaMedicinalDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async deletePlantaMedicinal(req, res) {
        try {
            await plantasMedicinalesService.deletePlantaMedicinal(req.params.id);
            return res.status(200).json({ message: "PlantaMedicinal deleted" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}