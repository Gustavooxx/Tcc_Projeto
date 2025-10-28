import connection from "./connetion.js";


export async function cadastroVoluntario(infos,usuario_id){
const comando = `
insert into voluntarios (nome,email,cpf,telefone,disponibilidade,mensagem,usuario_id)
values
(?,?,?,?,?,?,?)
`

const [info] = await connection.query(comando,[infos.nome,infos.email,infos.cpf,infos.telefone,infos.disponibilidade,infos.mensagem,usuario_id]);

return info.insertId;


}
