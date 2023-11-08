import cronogramaAnualDTO from '../DTO/cronogramaAnualDTO.js';
import cronogramaAnual from '../models/conogramaAnualModel.js';
import cronogramaAnualService from '../services/cronogramaAnualService.js';

const cronogramaAnualController = {
    async getAllCronogramasAnuales(req, res) {
        try {
            const cronogramasAnuales = await cronogramaAnualService.getAllCronogramasAnuales();
            const cronogramasAnualesDTO = cronogramasAnuales.map((cronogramaAnualDTO) => cronogramaAnualDTO(cronogramaAnual));
            return res.status(200).json(cronogramasAnualesDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getCronogramaAnualById(req, res) {
        try {
            const cronogramaAnual = await cronogramaAnualService.getById(req.params.id);
            if (!cronogramaAnual) return res.status(404).json({ message: "CronogramaAnual not found" });
            const cronogramaAnualDTO = cronogramaAnualDTO(cronogramaAnual);
            return res.status(200).json(cronogramaAnualDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async getCronogramasAnualesPagination(req, res) {
        try {
            const start = parseInt(req.params.start);
            const end = parseInt(req.params.end);
            const cronogramasAnuales = await cronogramaAnualService.getCronogramasAnualesPagination(start, end);
            const cronogramasAnualesDTO = cronogramasAnuales.map((cronogramaAnual) => cronogramaAnualDTO(cronogramaAnual));
            return res.status(200).json(cronogramasAnualesDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async createCronogramaAnual(req, res) {
        try {
            const cronogramaAnual = await cronogramaAnualService.createCronogramaAnual(req.body);
            const cronogramaAnualDTO = cronogramaAnualDTO(cronogramaAnual);
            return res.status(201).json(cronogramaAnualDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async updateCronogramaAnual(req, res) {
        try {
            const cronogramaAnual = await cronogramaAnualService.updateCronogramaAnual(req.params.id, req.body);
            const cronogramaAnualDTO = cronogramaAnualDTO(cronogramaAnual);
            return res.status(200).json(cronogramaAnualDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async deleteCronogramaAnual(req, res) {
        try {
            const cronogramaAnual = await cronogramaAnualService.deleteCronogramaAnual(req.params.id);
            const cronogramaAnualDTO = cronogramaAnualDTO(cronogramaAnual);
            return res.status(200).json(cronogramaAnualDTO);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default cronogramaAnualController;