import express from 'express';
import medicamentoController from '../controllers/medicamentoController.js';
import passport from '../middleware/verifyToken.js';

const medicamentoRouter = express.Router();

medicamentoRouter.get('/', medicamentoController.getMedicamentos);
medicamentoRouter.post('/', passport.authenticate('jwt', { session: false }), medicamentoController.createMedicamento);
medicamentoRouter.put('/:id', passport.authenticate('jwt', { session: false }), medicamentoController.updateMedicamento);
medicamentoRouter.delete('/:id', passport.authenticate('jwt', { session: false }), medicamentoController.deleteMedicamento);

export default medicamentoRouter;