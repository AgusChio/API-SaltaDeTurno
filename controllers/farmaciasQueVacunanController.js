import farmaciasQueVacunanService from '../services/farmaciasQueVacunanService.js';
import farmaciasQueVacunanDTO from '../DTO/farmaciasQueVacunanDTO.js';

const farmaciasQueVacunanController = {
    async getAllFarmaciasQueVacunan(req, res) {
        try {
            const farmaciasQueVacunan = await farmaciasQueVacunanService.getAllFarmaciasQueVacunan();
            const farmaciasQueVacunanDTO = farmaciasQueVacunan.map((farmaciaQueVacuna) => farmaciasQueVacunanDTO(farmaciaQueVacuna));
            return res.status(200).json(farmaciasQueVacunanDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getFarmaciaQueVacunaById(req, res) {
        try {
            const farmaciaQueVacuna = await farmaciasQueVacunanService.getById(req.params.id);
            if (!farmaciaQueVacuna) return res.status(404).json({ message: "FarmaciaQueVacuna not found" });
            const farmaciaQueVacunaDTO = farmaciasQueVacunanDTO(farmaciaQueVacuna);
            return res.status(200).json(farmaciaQueVacunaDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createFarmaciaQueVacuna(req, res) {
        try {
            const farmaciaQueVacuna = await farmaciasQueVacunanService.createFarmaciaQueVacuna(req.body);
            const farmaciaQueVacunaDTO = farmaciasQueVacunanDTO(farmaciaQueVacuna);
            return res.status(201).json(farmaciaQueVacunaDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async updateFarmaciaQueVacuna(req, res) {
        try {
            const farmaciaQueVacuna = await farmaciasQueVacunanService.updateFarmaciaQueVacuna(req.params.id, req.body);
            const farmaciaQueVacunaDTO = farmaciasQueVacunanDTO(farmaciaQueVacuna);
            return res.status(200).json(farmaciaQueVacunaDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async deleteFarmaciaQueVacuna(req, res) {
        try {
            const farmaciaQueVacuna = await farmaciasQueVacunanService.deleteFarmaciaQueVacuna(req.params.id);
            return res.status(200).json({ success: true, deleted_farmaciaQueVacuna: farmaciaQueVacuna });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default farmaciasQueVacunanController;