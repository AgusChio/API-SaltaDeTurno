import inyectablesService from "../services/inyectablesService";
import inyectablesDTO from "../DTO/inyectablesDTO";
import inyectables from "../models/inyectablesModel";

const inyectablesController = {
    async getAllInyectables(req, res) {
        try {
            const inyectables = await inyectablesService.getAllInyectables();
            const inyectablesDTO = inyectables.map((inyectable) => inyectablesDTO(inyectable));
            return res.status(200).json(inyectablesDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getInyectableById(req, res) {
        try {
            const inyectable = await inyectablesService.getById(req.params.id);
            if (!inyectable) return res.status(404).json({ message: "Inyectable not found" });
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.createInyectable(req.body);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(201).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async updateInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.updateInyectable(req.params.id, req.body);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async deleteInyectable(req, res) {
        try {
            const inyectable = await inyectablesService.deleteInyectable(req.params.id);
            const inyectableDTO = inyectablesDTO(inyectable);
            return res.status(200).json(inyectableDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default inyectablesController;