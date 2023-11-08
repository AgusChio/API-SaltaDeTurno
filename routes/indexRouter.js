import express from 'express';
import authRouter from './routes/authRouter.js';
import medicamentoRouter from './routes/medicamentoRouter.js';
import farmaciaRouter from './routes/farmaciaRouter.js';
import inyectablesRouter from './routes/inyectablesRouter.js';
import plantasMedicinalesRouter from './routes/plantasMedicinalesRouter.js';
import cronogramaAnualRouter from './routes/cronogramaAnualRouter.js';
import farmaciasQueVacunanRouter from './routes/farmaciasQueVacunanRouter.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/medicamentos', medicamentoRouter);
app.use('/api/farmacias', farmaciaRouter);
app.use('/api/inyectables', inyectablesRouter);
app.use('/api/plantasmedicinales', plantasMedicinalesRouter);
app.use('/api/cronogramaanual', cronogramaAnualRouter);
app.use('/api/farmaciasquevacunan', farmaciasQueVacunanRouter);

