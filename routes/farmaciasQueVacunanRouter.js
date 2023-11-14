import express from 'express';
import farmaciasQueVacunanController from '../controllers/farmaciasQueVacunanController.js';
import passport from '../middleware/verifyToken.js'

const farmaciasQueVacunanRouter = express.Router();

farmaciasQueVacunanRouter.get('/', farmaciasQueVacunanController.getAllFarmaciasQueVacunan);
farmaciasQueVacunanRouter.get('/:id', farmaciasQueVacunanController.getFarmaciaQueVacunaById);
farmaciasQueVacunanRouter.put('/:id', passport.authenticate('jwt', { session: false }), farmaciasQueVacunanController.updateFarmaciaQueVacuna);
farmaciasQueVacunanRouter.post('/', passport.authenticate('jwt', { session: false }), farmaciasQueVacunanController.createFarmaciaQueVacuna);
farmaciasQueVacunanRouter.delete('/:id', passport.authenticate('jwt', { session: false }), farmaciasQueVacunanController.deleteFarmaciaQueVacuna);

export default farmaciasQueVacunanRouter;