import { cadastrar, consultarCpf, consultarEmail, } from "../repository/cadastroRepository.js";
import { validarCadastro, validarCpfBanco,  validarEmailBanco,  } from "../validation/cadastro/cadastrarValidation.js";

export async function serviceCadastrar(novoCadastro){
    try {
        // Limpar o CPF removendo caracteres não numéricos antes da validação
        novoCadastro.cpf = novoCadastro.cpf.replace(/\D/g, '');

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
