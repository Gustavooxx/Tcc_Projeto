import { cadastrar } from "../repository/cadastroRepository.js";

export async function serviceCadastrar(novoCadastro){
    let id = await cadastrar(novoCadastro)
    return id;
}