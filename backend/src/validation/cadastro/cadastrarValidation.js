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


