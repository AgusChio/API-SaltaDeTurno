import express from 'express';
import authRouter from './authRouter.js';
import medicamentoRouter from './medicamentoRouter.js';
import farmaciaRouter from './farmaciaRouter.js';
import inyectablesRouter from './inyectablesRouter.js';
import plantasMedicinalesRouter from './plantasMedicinalesRouter.js';
import cronogramaAnualRouter from './cronogramaAnualRouter.js';
import farmaciasQueVacunanRouter from './farmaciasQueVacunanRouter.js';

const indexRouter = express();

indexRouter.use(express.json());

indexRouter.use('/api/auth', authRouter);
indexRouter.use('/api/medicamentos', medicamentoRouter);
indexRouter.use('/api/farmacias', farmaciaRouter);
indexRouter.use('/api/inyectables', inyectablesRouter);
indexRouter.use('/api/plantasmedicinales', plantasMedicinalesRouter);
indexRouter.use('/api/cronogramaanual', cronogramaAnualRouter);
indexRouter.use('/api/farmaciasquevacunan', farmaciasQueVacunanRouter);

export default indexRouter;