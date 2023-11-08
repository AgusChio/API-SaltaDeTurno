import CronogramaAnual from "../models/conogramaAnualModel"

const cronogramaAnualService = {

    async getAllCronogramasAnuales() {
        try {
            const cronogramasAnuales = await CronogramaAnual.find()
            return cronogramasAnuales
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const cronogramaAnual = await CronogramaAnual.findById(id)
            return cronogramaAnual
        } catch (error) {
            throw new Error(error)
        }
    },

    async getCronogramasAnualesPagination(start, end) {
        try {
            const cronogramasAnuales = await CronogramaAnual.find().skip(start).limit(end)
            return cronogramasAnuales
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createCronogramaAnual(data) {
        try {
            const newCronogramaAnual = await CronogramaAnual.create(data)
            return newCronogramaAnual
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateCronogramaAnual(id, data) {
        try {
            const updatedCronogramaAnual = await CronogramaAnual.findByIdAndUpdate(id, data, { new: true });
            return updatedCronogramaAnual;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteCronogramaAnual(id) {
        try {
            const deletedCronogramaAnual = await CronogramaAnual.findByIdAndDelete(id)
            return deletedCronogramaAnual
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default cronogramaAnualService