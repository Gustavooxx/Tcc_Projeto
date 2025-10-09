export function validarCpf(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    let digit1 = remainder === 10 ? 0 : remainder;
    if (digit1 !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    let digit2 = remainder === 10 ? 0 : remainder;
    return digit2 === parseInt(cpf[10]);
}

export function validarCadastro(cadastro){

    if(!cadastro.nome_completo)
         throw new Error('Nome obrigatório');


    if(!cadastro.email)
         throw new Error('Email obrigatório');


    if(!cadastro.senha)
         throw new Error('Senha obrigatório');


    if(!cadastro.cpf )
         throw new Error('CPF obrigatório');


    if( isNaN(cadastro.cpf))
         throw new Error('É obrigatório que o CPF seja em números');


    if(cadastro.cpf.length !== 11)
         throw new Error('CPF deve ter 11 dígitos');


    if(!validarCpf(cadastro.cpf))
         throw new Error('CPF inválido');


    if(!cadastro.telefone)
         throw new Error('Telefone obrigatório');


    if(!cadastro.estado)
         throw new Error('Estado obrigatório');


    if(!cadastro.tipo_sanguineo)
         throw new Error('Tipo sanguíneo obrigatório');


    if(!cadastro.sexo)
         throw new Error('Sexo obrigatório');


    if(!cadastro.origem)
         throw new Error('Origem obrigatória');


}

export function validarCpfBanco(registro){
     if(registro){
        throw new Error('CPF já cadastrado');
    }
}

export function validarEmailBanco(registro){
     if(registro){
        throw new Error('Email já cadastrado');
    }
}


