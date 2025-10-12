import connection from "./connetion.js";

export async function lista() {
    const comando = `
    select * from cadastro_users
    `
    const [registros] = await connection.query(comando)
    return registros;
}


export async function cadastrar(novoCadastro){
    const comando = 
    `INSERT INTO cadastro_users
(nome_completo, email, senha, cpf, telefone, estado, sexo, origem) 
VALUES 
(?, ?, MD5(?), ?, ?, ?, ?, ?);
`
    const [info] = await connection.query(comando, [novoCadastro.nome_completo, novoCadastro.email,
         novoCadastro.senha, novoCadastro.cpf, novoCadastro.telefone, novoCadastro.estado,
          novoCadastro.sexo, novoCadastro.origem]);
  
         return info.insertId;


}

export async function consultarCpf(novoCadastro){
   const comando = `
    select * from cadastro_users
     where cpf = ?
    
    `

    const [info] = await connection.query(comando,[novoCadastro.cpf]);
    return info[0];
}

export async function consultarEmail(novoCadastro){
   const comando = `
    select * from cadastro_users
     where email = ?
    
    `

    const [info] = await connection.query(comando,[novoCadastro.email]);
    return info[0];
}

export async function logarDoador(cadastro){
    const comando = `
    select * from doadores 
    where email = ?
    and senha = MD5(?)

    `

    const [registros] = await connection.query(comando, [cadastro.email, cadastro.senha]);
    return registros[0];

}

export async function doadorToken(token, id){
const comando = `
insert into tokens (token,id_doador)
values
(?,?)
`
const [info] = await connection.query(comando,[token,id]);
return info.affectedRows;

}

