import FarmaciaQueVacunan from "../models/farmaciasQueVacunanModel.js"

const farmaciasQueVacunanService = {
    async getAllFarmaciasQueVacunan() {
        try {
            const farmaciasQueVacunan = await FarmaciaQueVacunan.find()
            return farmaciasQueVacunan
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const farmaciaQueVacuna = await FarmaciaQueVacunan.findById(id)
            return farmaciaQueVacuna
        } catch (error) {
            throw new Error(error)
        }
    },

    async getFarmaciasQueVacunanPagination(start, end) {
        try {
            const farmaciasQueVacunan = await FarmaciaQueVacunan.find().skip(start).limit(end)
            return farmaciasQueVacunan
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createFarmaciaQueVacuna(data) {
        try {
            const newFarmaciaQueVacuna = await FarmaciaQueVacunan.create(data)
            return newFarmaciaQueVacuna
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateFarmaciaQueVacuna(id, data) {
        try {
            const updatedFarmaciaQueVacuna = await FarmaciaQueVacunan.findByIdAndUpdate(id, data, { new: true });
            return updatedFarmaciaQueVacuna;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteFarmaciaQueVacuna(id) {
        try {
            const deletedFarmaciaQueVacuna = await FarmaciaQueVacunan.findByIdAndDelete(id)
            return deletedFarmaciaQueVacuna
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default farmaciasQueVacunanService