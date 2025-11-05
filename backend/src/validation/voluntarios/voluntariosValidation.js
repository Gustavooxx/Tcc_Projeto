
export default function validarVoluntarios(infos,usuario_id){

    if(!infos.nome)
    throw new Error('Nome obrigatório');

    if(!infos.email)
    throw new Error('Email obrigatório');

    if(!infos.cpf)
    throw new Error('CPF obrigatório');

    if(!infos.telefone)
    throw new Error('Telefone obrigatório');

    if(!infos.disponibilidade)
    throw new Error('Disponibilidade obrigatória');

    if(!infos.nome_hemocentro)
    throw new Error('Hemocentro obrigatório');

    // if(!infos.mensagem)
    // throw new Error('Mensagem obrigatória');

    // if(!usuario_id)
    // throw new Error('Usuario não logado');

}
