import { Router } from "express";
import { serviceCadastrar, serviceLogar, serviceToken } from "../service/serviceCadastrar.js";
import { generateToken } from "../utils/jwt.js";
import { lista } from "../repository/cadastroRepository.js";

const cadastro = Router();

cadastro.get('/listar/cadastros', async (req,resp) => {
    let registros = await lista();
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


cadastro.post('/logar', async (req,resp) => {
try {

    let login = req.body;
    let registros = await serviceLogar(login);

    let token =  generateToken(registros);

    let rows = await serviceToken(token, registros.id);

    resp.status(201).send({
       token,
       rows
    });

} 
catch (error) {
    return resp.status(400).json({ erro: error.message });
}

})

export default cadastro;
