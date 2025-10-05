import { Router } from "express";
import { cadastrar, lista } from "../repository/cadastroRepository.js";
import logger, { logInfo } from "../utils/log.js";
import { error } from "winston";
import { serviceCadastrar } from "../service/serviceCadastrar.js";


const cadastro = Router();

cadastro.get('/listar', async (req,resp) => {
    let registros = await lista()
    resp.send(registros)
})


cadastro.post('/cadastro', async (req, resp) => {
    try {
    let novoCadastro = req.body;
    serviceCadastrar(novoCadastro).then((id) =>{
        resp.status(201)
        resp.send({novoId: id});
        
    })} catch (error) {

        logger.error('Erro ao cadastrar: ' + (error.message));
        return resp.status(500).send({erro: error.message});
    }


})

export default cadastro;