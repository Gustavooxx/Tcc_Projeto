import 'dotenv/config.js';

import express from 'express';
import cors from 'cors';
import { Rotas } from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());

Rotas(app)

const PORTA = process.env.PORTA;

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));