import { Router } from "express";
import { deletarAgendamento, listarAgendamentoUsario, editarAgendamento, atualizarInformacoes, atualizarSenha } from "../repository/agendamentoUserRepository.js";
import { getAuthentication } from "../utils/jwt.js";

const autenticar = getAuthentication();
const agendamentoUser = Router();

agendamentoUser.get('/listar/agendamentos/usuario', autenticar, async (req, resp) => {
    try{
        let usuario_id = req.user && req.user.id_cadastro;
        console.log('Usuario ID:', usuario_id);
        if(!usuario_id) return resp.status(401).json({ erro: 'Usuário nao autenticado' });
        let agendamentos = await listarAgendamentoUsario(usuario_id);
        console.log('Agendamentos encontrados:', agendamentos);
        resp.send(agendamentos);
    }catch(error){
        console.error('Erro no controller:', error);
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

agendamentoUser.put('/senha/atualizar', autenticar, async (req,resp) => {
    try {
        let id_cadastro = req.user && req.user.id_cadastro;
        let atualizar = req.body;
        atualizar.id_cadastro = id_cadastro;
        let agendamentos = await atualizarSenha(atualizar, id_cadastro);
        resp.send("senha atualizada com sucesso");
    } catch (error) {
        return resp.status(400).json({ erro: error.message });
    }
})

export default agendamentoUser;