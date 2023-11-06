import Farmacia from "../models/farmaciaModel"

const farmaciaService = {

    async getAllFarmacias() {
        try {
            const farmacias = await Farmacia.find()
            return farmacias
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const farmacia = await Farmacia.findById(id)
            return farmacia
        } catch (error) {
            throw new Error(error)
        }
    },

    async getFarmaciasPagination(start, end) {
        try {
            const farmacias = await Farmacia.find().skip(start).limit(end)
            return farmacias
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createFarmacia(data) {
        try {
            const newFarmacia = await Farmacia.create(data)
            return newFarmacia
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateFarmacia(id, data) {
        try {
            const updatedFarmacia = await Farmacia.findByIdAndUpdate(id, data, { new: true });
            return updatedFarmacia;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteFarmacia(id) {
        try {
            const deletedFarmacia = await Farmacia.findByIdAndDelete(id)
            return deletedFarmacia
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default farmaciaService