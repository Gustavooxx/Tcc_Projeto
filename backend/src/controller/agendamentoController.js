import { Router } from "express";
import { agendamentoUsario, lista } from "../repository/agendamentoRepository.js";
import { getAuthentication } from "../utils/jwt.js";
import serviceAgendamento, { listarHemocentrosDisponiveisService, listarHorariosDisponiveis } from "../service/serviceAgendamento.js";

const Authentication = getAuthentication();
const endpoints = Router();

endpoints.get('/listar', async (req, resp) => {
    try{
        let usuarios = await lista();
        resp.send(usuarios);
    }catch(error){
        return resp.status(400).json({erro: error.message})
    }
})

endpoints.post('/agendamento', Authentication, async (req, resp) => {
    try{
        const usuario_id = req.user && req.user.id_cadastro;
        if (!usuario_id) return resp.status(401).json({ erro: 'Usuário não autenticado' });

        let novoAgendamento = req.body;
        let id = await serviceAgendamento(novoAgendamento, usuario_id);
        resp.status(201).send({ novoAgendamentoId: id });
    } catch(error){
        resp.status(400).json({erro: error.message})
    }
})

endpoints.get('/listarHemocentros', async (req,resp) => {
    try {
        const registros = await listarHemocentrosDisponiveisService();

        resp.status(201).send({
            registros
        })
    } catch (error) {
        resp.status(400).json({erro: error.message})
    }
})

endpoints.post('/listarHorariosDisponiveis', async(req,resp) =>{
try {
    const requisitos = req.body;
    const resposta = await listarHorariosDisponiveis(requisitos);
    resp.status(201).send({
        resposta
    })
}
 catch (error) {
     resp.status(400).json({erro: error.message});
}
})


export default endpoints