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
    `insert into tb_cadastro (nomeCompleto,email,cpf,telefone,estado,sexo,tipoSanguineo,ondeConheceu)
     values(?, ?, ?, ?, ?, ?, ?, ?);`
    const [info] = await connection.query(comando, [novoCadastro.nomeCompleto,
         novoCadastro.email, novoCadastro.cpf, novoCadastro.telefone,
         novoCadastro.estado,
         novoCadastro.sexo, novoCadastro.tipoSanguineo, novoCadastro.ondeConheceu])

         return info.insertId;
}