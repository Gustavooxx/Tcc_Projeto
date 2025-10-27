import { Router } from "express";
import { deletarAgendamento, listarAgendamentoUsario, editarAgendamento, atualizarInformacoes } from "../repository/agendamentoUserRepository.js";
import { getAuthentication } from "../utils/jwt.js";

const autenticar = getAuthentication();
const agendamentoUser = Router();

agendamentoUser.get('/listar/agendamentos/usuario', autenticar, async (req, resp) => {
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
        resp.send("Agendamento atualizado com sucesso");
    } catch(error){
        return resp.status(400).json({erro: error.message})
    }
})

agendamentoUser.delete('/deletar/:id_agendamento', autenticar, async (req, resp) => {
    try{
        let id_agendamento = req.params.id_agendamento;
        let agendamentos = await deletarAgendamento(id_agendamento);
        resp.send("Agendamento cancelado com sucesso");
    }catch(error){
        return resp.status(400).json({erro: error.message})
    }
})

agendamentoUser.put('/informacoes/atualizar', autenticar, async (req, resp) => {
    try{
        let id_cadastro = req.user && req.user.id_cadastro;
        let atualizar = req.body;
        atualizar.id_cadastro = id_cadastro;
        let agendamentos = await atualizarInformacoes(atualizar, id_cadastro);
        resp.send("informacoes atualizadas com sucesso");
    } catch(error){
        return resp.status(400).json({erro: error.message})
    }
})


export default agendamentoUser;