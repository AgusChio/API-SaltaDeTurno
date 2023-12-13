import inyectablesService from "../services/inyectablesService.js";
import inyectablesDTO from "../DTO/inyectablesDTO.js";

const inyectablesController = {
    async getAllInyectables(req, res) {
        try {
            const inyectables = await inyectablesService.getAllInyectables();
            return res.status(200).json(inyectables);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getInyectableById(req, res) {
        try {
            const inyectable = await inyectablesService.getById(req.params.id);
            if (!inyectable) return res.status(404).json({ message: "Inyectable not found" });
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async createInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.createInyectable(req.body);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(201).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error: error.messager });
        }
    },

    async updateInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.updateInyectable(req.params.id, req.body);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.deleteInyectable(req.params.id);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default inyectablesController;