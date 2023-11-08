import express from 'express';
import tiposMedicamentosController from '../controllers/tiposMedicamentosController.js';
import passport from '../middleware/verifyToken.js'

const tiposMedicamentosRouter = express.Router();

tiposMedicamentosRouter.get('/', tiposMedicamentosController.getAllTiposMedicamentos);
tiposMedicamentosRouter.get('/:id', tiposMedicamentosController.getTipoMedicamentoById);
tiposMedicamentosRouter.put('/:id', passport.authenticate('jwt', { session: false }), tiposMedicamentosController.updateTipoMedicamento);
tiposMedicamentosRouter.post('/', passport.authenticate('jwt', { session: false }), tiposMedicamentosController.createTipoMedicamento);
tiposMedicamentosRouter.delete('/:id', passport.authenticate('jwt', { session: false }), tiposMedicamentosController.deleteTipoMedicamento);
