import { Router } from "express";
import { deletarAgendamento, listarAgendamentoUsario, editarAgendamento } from "../repository/agendamentoUserRepository";
import { authentication } from "../utils/jwt.js";

const autenticar = authentication();
const agendamentoUser = Router();

agendamentoUser.post('/listar/agendamentos/usuario', autenticar, async (req, resp) => {
    try{
        let usuario_id = req.user && req.user.id_cadastro;
        if(!usuario_id) return resp.status(401).json({ erro: 'Usuário nao autenticado' });
        let agendamentos = await listarAgendamentoUsario(usuario_id);
        resp.send(agendamentos);
    }catch(error){
        return resp.status(400).json({erro: error.message})
    }
})

agendamentoUser.put('/atualizar/:id_agendamento', autenticar, async (req, resp) => {
    try{
        let id_agendamento = req.params.id_agendamento;
        let atualizar = req.body;
        atualizar.id_agendamento = id_agendamento;
        let agendamentos = await editarAgendamento(atualizar);
        resp.send(agendamentos);
    } catch(error){
        return resp.status(400).json({erro: error.message})
    }
})

agendamentoUser.delete('/deletar/:id_agendamento', autenticar, async (req, resp) => {
    try{
        let id_agendamento = req.params.id_agendamento;
        let agendamentos = await deletarAgendamento(id_agendamento);
        resp.send(agendamentos);
    }catch(error){
        return resp.status(400).json({erro: error.message})
    }
})




export default agendamentoUser;