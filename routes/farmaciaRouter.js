import express from 'express';
import farmaciaController from '../controllers/farmaciaController.js';
import passport from '../middleware/verifyToken.js';

const farmaciaRouter = express.Router();

farmaciaRouter.get('/', farmaciaController.getFarmacias);
farmaciaRouter.post('/', passport.authenticate('jwt', { session: false }), farmaciaController.createFarmacia);
farmaciaRouter.put('/:id', passport.authenticate('jwt', { session: false }), farmaciaController.updateFarmacia);
farmaciaRouter.delete('/:id', passport.authenticate('jwt', { session: false }), farmaciaController.deleteFarmacia);

export default farmaciaRouter;
