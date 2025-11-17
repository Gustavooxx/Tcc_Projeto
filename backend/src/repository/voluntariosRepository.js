import connection from "./connetion.js";
import transporter from "./email.js";


export async function cadastroVoluntario(infos, usuario_id){
const hemo= `select id_hemocentro from hemocentros
where nome_hemocentro = ?`

const [id] = await connection.query(hemo,[infos.nome_hemocentro])


    const comando = `
insert into voluntarios (nome,email,cpf,telefone,disponibilidade,mensagem,usuario_id,permissao,id_hemocentro)
values
(?,?,?,?,?,?,?,false,?)
`

const [info] = await connection.query(comando,[infos.nome,infos.email,infos.cpf,infos.telefone,infos.disponibilidade,infos.mensagem,usuario_id,id[0].id_hemocentro]);

const assunto = `Agradecemos por se tornar voluntário(a)! `;
const texto = `Olá, ${infos.nome}!

Agradecemos por seu interesse em se tornar parte da nossa equipe de voluntários(as).
Sua vontade de ajudar faz toda a diferença e nos inspira a continuar essa missão tão importante. 🌟

Em breve, você receberá um e-mail de confirmação informando se sua inscrição foi aprovada ou não.
De qualquer forma, agradecemos profundamente por dedicar seu tempo e disposição para apoiar essa causa. ❤️

Caso seja aceito(a), enviaremos também todas as orientações sobre os próximos passos e atividades disponíveis.

Com gratidão,
Equipe Doe Vida`

await transporter.sendMail({
      to: infos.email,
    subject: assunto,
    text: texto
});

return info.insertId;
}
