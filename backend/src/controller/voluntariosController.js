import { Router } from "express";

import { getAuthentication } from "../utils/jwt.js";
import { cadastrarVoluntariosService } from "../service/serviceVoluntarios.js";

const voluntarios = Router();
const Autenticador = getAuthentication();


voluntarios.post('/voluntarios',Autenticador, async (req,resp) => {
try {
const infos = req.body;
const usuario_id = req.user && req.user.id_cadastro;

if(!usuario_id)return resp.status(401).json({ erro: 'Usuário não autenticado' });

const id = await cadastrarVoluntariosService(infos,usuario_id);

resp.status(201).send({
    id
})

} 
catch (error) {
    return resp.status(400).json({ erro: error.message });
}

});

export default voluntarios;

