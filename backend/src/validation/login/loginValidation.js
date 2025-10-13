
export function validarLogin(login, rows){

    if(!cadastro.email)
        throw new Error('Email obrigatório');
    
    if(!login.senha)
         throw new Error('Senha obrigatório');

}

export function validarEmailBanco(registro){
     if(registro){
        throw new Error('Email obrigatorio');
    }
}

export function validarSenhaBanco(registro){
     if(registro){
        throw new Error('Senha incorreta');
    }
}