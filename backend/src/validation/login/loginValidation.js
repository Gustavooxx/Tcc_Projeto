
export function validarLogin(login){

    if(!cadastro.email)
        throw new Error('Email obrigatório');
    
    if(!login.senha)
         throw new Error('Senha obrigatório');

}

export function validarEmailBanco(registro){
     if(registro){
        throw new Error('Email obrigatori');
    }
}

export function validarSenhaBanco(registro){
     if(registro){
        throw new Error('Senha incorreta');
    }
}