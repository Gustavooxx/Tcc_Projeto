import { validarCredenciais,validarLogin } from "../validation/cadastro/cadastrarValidation.js";
import { logarDoador, doadorToken } from "../repository/loginRepository.js";


export async function serviceLogar(cadastro){
    try {
       validarCredenciais(cadastro);

       let registros = await logarDoador(cadastro);

       validarLogin(registros);

       return registros;
    

    } 
    catch (error) {
        throw error;
    }
}

export async function serviceToken(token, id){
    let rows = await doadorToken(token, id);

    return rows;
}