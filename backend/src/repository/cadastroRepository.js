import connection from "./connetion.js";

export async function lista() {
    const comando = `
    select * from doadores
    `
    const [registros] = await connection.query(comando)
    return registros;
}


export async function cadastrar(novoCadastro){
    const comando = 
    `INSERT INTO doadores 
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
    select * from doadores
     where cpf = ?
    
    `

    const [info] = await connection.query(comando,[novoCadastro.cpf]);
    return info[0];
}

export async function consultarEmail(novoCadastro){
   const comando = `
    select * from doadores
     where email = ?
    
    `

    const [info] = await connection.query(comando,[novoCadastro.email]);
    return info[0];
}

