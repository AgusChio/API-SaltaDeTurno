import plantasMedicinalesDTO from '../DTO/plantasMedicinalesDTO.js';
import plantasMedicinalesService from '../services/plantasMedicinalesService.js';

const plantasMedicinalesController = {
    async getAllPlantasMedicinales(req, res) {
        try {
            const plantasMedicinales = await plantasMedicinalesService.getAllPlantasMedicinales();
            const response = {};
            const plantasMedicinalesResponse = plantasMedicinales.map(plantasMedicinalesDTO);
            response.plantasMedicinales = plantasMedicinalesResponse;
            response.count = plantasMedicinalesResponse.length;
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getPlantaMedicinalById(req, res) {
        try {
            const plantaMedicinal = await plantasMedicinalesService.getById(req.params.id);
            if (!plantaMedicin9al) return res.status(404).json({ message: "PlantaMedicinal not found" });
            const plantaMedicinalDTO = plantasMedicinalesDTO(plantaMedicinal);
            return res.status(200).json(plantaMedicinalDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createPlantaMedicinal(req, res) {
        try {
            const plantaMedicinalDTO = plantasMedicinalesDTO(req.body);
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

export default plantasMedicinalesController;