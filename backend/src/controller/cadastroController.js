import { Router } from "express";
import { cadastrar, lista } from "../repository/cadastroRepository.js";


const cadastro = Router();

cadastro.get('/listar', async (req,resp) => {
    let registros = await lista()
    resp.send(registros)
})


cadastro.post('/cadastro', async (req, resp) => {
   let novoCadastro = req.body;
   let id = await cadastrar(novoCadastro);

   resp.send({novoId: id})

})

export default cadastro;