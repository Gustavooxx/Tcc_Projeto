import express from 'express';
import { Rotas } from './routes.js';

const app = express();
app.use(express.json());

Rotas(app)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));