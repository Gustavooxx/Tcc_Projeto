import { Router } from "express";
import {  serviceLogar, serviceToken } from "../service/serviceLogin.js";
import { generateToken } from "../utils/jwt.js";

const endpoints = Router();


endpoints.post('/logar', async (req,resp) => {
try {

    let login = req.body;
    let registros = await serviceLogar(login);

    let token =  generateToken(registros);

    let rows = await serviceToken(token, registros.id_cadastro);

    resp.status(201).send({
       token,
       rows
    });

} 
catch (error) {
    return resp.status(400).json({ erro: error.message });
}

});

export default endpoints;
