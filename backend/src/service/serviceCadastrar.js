import { cadastrar, consultarCpf, consultarEmail, doadorToken, logarDoador } from "../repository/cadastroRepository.js";
import { validarCadastro, validarCpfBanco, validarCredenciais, validarEmailBanco, validarLogin } from "../validation/cadastro/cadastrarValidation.js";

export async function serviceCadastrar(novoCadastro){
    try {
        validarCadastro(novoCadastro);
        
        let registros = await consultarCpf(novoCadastro);
        validarCpfBanco(registros);
        
        let registros2 = await consultarEmail(novoCadastro);
        validarEmailBanco(registros2);

        
        let id = await cadastrar(novoCadastro);
        return id;


    } 
    
    catch (error) {
        throw error;
    }
}

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