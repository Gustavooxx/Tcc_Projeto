import { Router } from "express";
import { cadastrar, lista } from "../repository/cadastroRepository.js";
import { logInfo } from "../utils/log.js";


const cadastro = Router();

cadastro.get('/listar', async (req,resp) => {
    let registros = await lista()
    resp.send(registros)
})


cadastro.post('/cadastro', async (req, resp) => {
    try {

    let novoCadastro = req.body;
    let id = await cadastrar(novoCadastro);
    logInfo(`Novo cadastro realizado com ID: ${id}`);

    resp.send({novoId: id});
    }
    
    catch (error) {
        logInfo(`Erro ao realizar cadastro: ${error.message}`);
        return resp.status(500).send({erro: error.message});
    }


})

export default cadastro;