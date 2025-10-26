import { Router } from "express";
import {  serviceLogar } from "../service/serviceLogin.js";
import { generateToken } from "../utils/jwt.js";

const endpoints = Router();


endpoints.post('/logar', async (req,resp) => {
try {

    let login = req.body;
    let registros = await serviceLogar(login);

    let token =  generateToken(registros);

  

    resp.status(201).send({
       token
    });

} 
catch (error) {
    return resp.status(400).json({ erro: error.message });
}

});

export default endpoints;
