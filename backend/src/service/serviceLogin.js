import { validarCredenciais } from "../validation/cadastro/cadastrarValidation.js";
import { logarDoador } from "../repository/loginRepository.js";


export async function serviceLogar(cadastro){
    try {
       validarCredenciais(cadastro);

       let registros = await logarDoador(cadastro);


       return registros;
    

    } 
    catch (error) {
        throw error;
    }
}
