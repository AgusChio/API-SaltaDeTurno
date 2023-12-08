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

indexRouter.use('/auth', authRouter);
indexRouter.use('/medicamentos', medicamentoRouter);
indexRouter.use('/farmacias', farmaciaRouter);
indexRouter.use('/inyectables', inyectablesRouter);
indexRouter.use('/plantasmedicinales', plantasMedicinalesRouter);
indexRouter.use('/cronogramaanual', cronogramaAnualRouter);
indexRouter.use('/farmaciasquevacunan', farmaciasQueVacunanRouter);

export default indexRouter;