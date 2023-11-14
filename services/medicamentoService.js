import Medicamento from "../models/medicamentoModel.js";

const medicamentoService = {
    async getAllMedicamentos() {
        try {
            const medicamentos = await Medicamento.find()
            return medicamentos
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const medicamento = await Medicamento.findById(id)
            return medicamento
        } catch (error) {
            throw new Error(error)
        }
    },

    async createMedicamento(data) {
        try {
            const newMedicamento = await Medicamento.create(data)
            return newMedicamento
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateMedicamento(id, data) {
        try {
            const updatedMedicamento = await Medicamento.findByIdAndUpdate(id, data, { new: true });
            return updatedMedicamento;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteMedicamento(id) {
        try {
            const deletedMedicamento = await Medicamento.findByIdAndDelete(id)
            return deletedMedicamento
        } catch (error) {
            throw new Error(error)
        }
    }

}

export default medicamentoService