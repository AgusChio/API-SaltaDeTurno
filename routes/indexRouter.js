import express from 'express';
import authRouter from './routes/authRouter.js';
import medicamentoRouter from './routes/medicamentoRouter.js';
import farmaciaRouter from './routes/farmaciaRouter.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/medicamentos', medicamentoRouter);
app.use('/api/farmacias', farmaciaRouter);
