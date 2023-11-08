import tiposMedicamentosService from "../services/tiposMedicamentosService";
import tiposMedicamentosDTO from "../DTO/tiposMedicamentosDTO";
import tiposMedicamentos from "../models/tiposMedicamentosModel";

const tiposMedicamentosController = {
    async getAllTiposMedicamentos(req, res) {
        try {
            const tiposMedicamentos = await tiposMedicamentosService.getAllTiposMedicamentos();
            const tiposMedicamentosDTO = tiposMedicamentos.map((tipoMedicamento) => tiposMedicamentosDTO(tipoMedicamento));
            return res.status(200).json(tiposMedicamentosDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getTipoMedicamentoById(req, res) {
        try {
            const tipoMedicamento = await tiposMedicamentosService.getById(req.params.id);
            if (!tipoMedicamento) return res.status(404).json({ message: "TipoMedicamento not found" });
            const tipoMedicamentoDTO = tiposMedicamentosDTO(tipoMedicamento);
            return res.status(200).json(tipoMedicamentoDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createTipoMedicamento(req, res) {
        try {
            const tipoMedicamento = await tiposMedicamentosService.createTipoMedicamento(req.body);
            const tipoMedicamentoDTO = tiposMedicamentosDTO(tipoMedicamento);
            return res.status(201).json(tipoMedicamentoDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async updateTipoMedicamento(req, res) {
        try {
            const tipoMedicamento = await tiposMedicamentosService.updateTipoMedicamento(req.params.id, req.body);
            const tipoMedicamentoDTO = tiposMedicamentosDTO(tipoMedicamento);
            return res.status(200).json(tipoMedicamentoDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async deleteTipoMedicamento(req, res) {
        try {
            const deletedTipoMedicamento = await tiposMedicamentosService.deleteTipoMedicamento(req.params.id);
            return res.status(200).json({ success: true, deleted_tipoMedicamento: deletedTipoMedicamento });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default tiposMedicamentosController;