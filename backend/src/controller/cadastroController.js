import { Router } from "express";
import { serviceCadastrar } from "../service/serviceCadastrar.js";

import { lista } from "../repository/cadastroRepository.js";

const cadastro = Router();

cadastro.get('/listar/cadastros/:id', async (req,resp) => {
    let id = req.params.id;
    let registros = await lista(id);
    resp.send(registros)
})


cadastro.post('/cadastro', async (req, resp) => {
    try {
        let novoCadastro = req.body;
        let id = await serviceCadastrar(novoCadastro);
        resp.status(201).send({ novoId: id });
    } catch (error) {
        return resp.status(400).json({ erro: error.message });
    }
});


export default cadastro;
