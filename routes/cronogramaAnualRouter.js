import express from 'express';
import cronogramaAnualController from '../controllers/cronogramaAnualController.js';
import passport from '../middleware/verifyToken.js'

const cronogramaAnualRouter = express.Router();

cronogramaAnualRouter.get('/', cronogramaAnualController.getAllCronogramasAnuales);
cronogramaAnualRouter.get('/:id', cronogramaAnualController.getCronogramaAnualById);
cronogramaAnualRouter.put('/:id', passport.authenticate('jwt', { session: false }), cronogramaAnualController.updateCronogramaAnual);
cronogramaAnualRouter.post('/', passport.authenticate('jwt', { session: false }), cronogramaAnualController.createCronogramaAnual);
cronogramaAnualRouter.delete('/:id', passport.authenticate('jwt', { session: false }), cronogramaAnualController.deleteCronogramaAnual);