import PlantasMedicinales from "../models/plantasMedicinalesModel.js"

const plantasMedicinalesService = {

    async getAllPlantasMedicinales() {
        try {
            const plantasMedicinales = await PlantasMedicinales.find()
            return plantasMedicinales
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const plantaMedicinal = await PlantasMedicinales.findById(id)
            return plantaMedicinal
        } catch (error) {
            throw new Error(error)
        }
    },

    async getPlantasMedicinalesPagination(start, end) {
        try {
            const plantasMedicinales = await PlantasMedicinales.find().skip(start).limit(end)
            return plantasMedicinales
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createPlantaMedicinal(data) {
        try {
            const newPlantaMedicinal = await PlantasMedicinales.create(data)
            return newPlantaMedicinal
        } catch (error) {
            throw new Error(error)
        }
    },

    async updatePlantaMedicinal(id, data) {
        try {
            const updatedPlantaMedicinal = await PlantasMedicinales.findByIdAndUpdate(id, data, { new: true });
            return updatedPlantaMedicinal;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deletePlantaMedicinal(id) {
        try {
            const deletedPlantaMedicinal = await PlantasMedicinales.findByIdAndDelete(id)
            return deletedPlantaMedicinal
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default plantasMedicinalesService