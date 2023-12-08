import medicamentoDTO from '../DTO/medicamentoDTO.js';
import medicamentoService from '../services/medicamentoService.js';

const medicamentoController = {
    async getMedicamentos(req, res) {
        try {
            const medicamentos = await medicamentoService.getAllMedicamentos()
            const response = {}
            const medicamentosResponse = medicamentos.map(medicamentoDTO)
            response.medicamentos = medicamentosResponse
            response.count = medicamentosResponse.length
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    async getMedicamentoById(req, res) {
        try {
            const medicamento = await medicamentoService.getById(req.params.id)
            res.status(200).json(medicamento)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    async createMedicamento(req, res) {
        try {
            const newMedicamento = await medicamentoService.createMedicamento(req.body)
            res.status(201).json({ success: true, new_medicamento: newMedicamento })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    },

    async updateMedicamento(req, res) { 
        try {
            const { id } = req.params;
            const medicamentoData = req.body;
            const updatedMedicamento = await medicamentoService.updateMedicamento(id, medicamentoData); 
            res.status(200).json({ success: true, updated_medicamento: updatedMedicamento });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    deleteMedicamento(req, res) {
        try {
            const deletedMedicamento = medicamentoService.deleteMedicamento(req.params.id)
            res.status(200).json({ success: true, deleted_medicamento: deletedMedicamento })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export default medicamentoController;