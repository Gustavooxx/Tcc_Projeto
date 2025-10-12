import { Router } from "express";
import { agendamentoUsario, lista, consultarEmail } from "../repository/agendamentoRepository.js";
import { getAuthentication } from "../utils/jwt.js";
import serviceAgendamento from "../service/serviceAgendamento.js";

const Authentication = getAuthentication();
const endpoints = Router();

endpoints.get('/listar', async (req, resp) => {
    try{
        let usuarios = await lista();
        resp.send(usuarios);
    }catch(error){
        return resp.status(400).json({error: error.message})
    }
})

endpoints.post('/agendamento', Authentication, async (req, resp) => {
    try{
        const usuario_id = req.user && req.user.id;
        if (!usuario_id) return resp.status(401).json({ error: 'Usuário não autenticado' });

        let novoAgendamento = req.body;
        let id = await serviceAgendamento(novoAgendamento, usuario_id);
        resp.status(201).send({ novoAgendamentoId: id });
    } catch(error){
        resp.status(400).json({error: error.message})
    }
})

export default endpoints