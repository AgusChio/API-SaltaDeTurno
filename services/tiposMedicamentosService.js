import TiposMedicamentos from "../models/tiposMedicamentosModel"

const tiposMedicamentosService = {

    async getAllTiposMedicamentos() {
        try {
            const tiposMedicamentos = await TiposMedicamentos.find()
            return tiposMedicamentos
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const tipoMedicamento = await TiposMedicamentos.findById(id)
            return tipoMedicamento
        } catch (error) {
            throw new Error(error)
        }
    },

    async getTiposMedicamentosPagination(start, end) {
        try {
            const tiposMedicamentos = await TiposMedicamentos.find().skip(start).limit(end)
            return tiposMedicamentos
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createTipoMedicamento(data) {
        try {
            const newTipoMedicamento = await TiposMedicamentos.create(data)
            return newTipoMedicamento
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateTipoMedicamento(id, data) {
        try {
            const updatedTipoMedicamento = await TiposMedicamentos.findByIdAndUpdate(id, data, { new: true });
            return updatedTipoMedicamento;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteTipoMedicamento(id) {
        try {
            const deletedTipoMedicamento = await TiposMedicamentos.findByIdAndDelete(id)
            return deletedTipoMedicamento
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default tiposMedicamentosService