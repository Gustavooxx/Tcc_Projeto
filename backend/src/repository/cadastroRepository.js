import connection from "./connetion.js";

export async function lista(id_cadastro) {
    const comando = `
    select * from cadastro_users where id_cadastro= ?
    `
    const [registros] = await connection.query(comando, [id_cadastro])
    return registros;
}

export async function dataCriacao() {
    const comando = `
    select criado_em from cadastro_users
    `
    const [registros] = await connection.query(comando)
    return registros;
    
}

export async function cadastrar(novoCadastro){
    const comando =
    `INSERT INTO cadastro_users
(nome_completo, email, senha, cpf, telefone, estado, sexo, tipo_sanguineo, origem)
VALUES
(?, ?, MD5(?), ?, ?, ?, ?, ?, ?);
`
    const [info] = await connection.query(comando, [novoCadastro.nome_completo, novoCadastro.email,
         novoCadastro.senha, novoCadastro.cpf, novoCadastro.telefone, novoCadastro.estado,
          novoCadastro.sexo, novoCadastro.tipo_sanguineo, novoCadastro.origem]);

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

