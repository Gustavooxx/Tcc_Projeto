import connection from "./connetion.js";

export async function lista() {
    const comando = `
    select * from tb_cadastro
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