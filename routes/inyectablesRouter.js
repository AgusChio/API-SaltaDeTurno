import express from 'express';
import inyectablesController from '../controllers/inyectablesController.js';
import passport from '../middleware/verifyToken.js'

const inyectablesRouter = express.Router();

inyectablesRouter.get('/', inyectablesController.getAllInyectables);
inyectablesRouter.get('/:id', inyectablesController.getInyectableById);
inyectablesRouter.put('/:id', passport.authenticate('jwt', { session: false }), inyectablesController.updateInyectable);
inyectablesRouter.post('/', passport.authenticate('jwt', { session: false }), inyectablesController.createInyectable);
inyectablesRouter.delete('/:id', passport.authenticate('jwt', { session: false }), inyectablesController.deleteInyectable);

export default inyectablesRouter;