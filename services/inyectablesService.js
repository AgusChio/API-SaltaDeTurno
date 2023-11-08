import Inyectables from "../models/inyectablesModel"

const inyectablesService = {

    async getAllInyectables() {
        try {
            const inyectables = await Inyectables.find()
            return inyectables
        } catch (error) {
            throw new Error(error)
        }
    },

    async getById(id) {
        try {
            const inyectable = await Inyectables.findById(id)
            return inyectable
        } catch (error) {
            throw new Error(error)
        }
    },

    async getInyectablesPagination(start, end) {
        try {
            const inyectables = await Inyectables.find().skip(start).limit(end)
            return inyectables
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    async createInyectable(data) {
        try {
            const newInyectable = await Inyectables.create(data)
            return newInyectable
        } catch (error) {
            throw new Error(error)
        }
    },

    async updateInyectable(id, data) {
        try {
            const updatedInyectable = await Inyectables.findByIdAndUpdate(id, data, { new: true });
            return updatedInyectable;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    async deleteInyectable(id) {
        try {
            const deletedInyectable = await Inyectables.findByIdAndDelete(id)
            return deletedInyectable
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default inyectablesService