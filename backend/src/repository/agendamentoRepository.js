import connection from "./connetion.js";
import transporter from "./email.js";

export async function lista() {
  const comando = `
    select * from agendamentos
    `;
  const [registros] = await connection.query(comando);
  return registros;
}

export async function agendamentoUsario(novoAgendamento, usuario_id) {
  const comando = `
       INSERT INTO agendamentos (
    usuario_id, nome_completo, email, telefone,
    estado, cpf, cidade, tipo_sanguineo, data_agendamento,
    horario, observacoes, confirmou_requisitos
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

  const [info] = await connection.query(comando, [
    usuario_id,
    novoAgendamento.nome_completo,
    novoAgendamento.email,
    novoAgendamento.telefone,
    novoAgendamento.estado,
    novoAgendamento.cpf,
    novoAgendamento.cidade,
    novoAgendamento.tipo_sanguineo,
    novoAgendamento.data_agendamento,
    novoAgendamento.horario,
    novoAgendamento.observacoes,
    novoAgendamento.confirmou_requisitos,
  ]);

  const comando2 = `

  select id_hemocentro from hemocentros
  where nome_hemocentro = ?
  `

  const [idResult] = await connection.query(comando2,[novoAgendamento.nome_hemocentro]);
  const hemocentroId = idResult[0]?.id_hemocentro;

  const comando3 = `
   update agendamentos
   set hemocentro_id = ?
   where id = ?

  `

   await connection.query(comando3,[hemocentroId, info.insertId]);

   const comando4 = `
   insert into agenda_user (data_disponivel,horario_disponivel,hemocentros_id,usuario_id)
   values
   (?,?,?,?)
   `

   const assunto = 'Confirmação do seu agendamento de doação de sangue 🩸'
   const texto = `Olá, ${novoAgendamento.nome_completo}!

    Seu agendamento para doação de sangue foi confirmado com sucesso. ❤️

    🏥 Hemocentro: ${novoAgendamento.nome_hemocentro}
    📅 Data: ${novoAgendamento.data_agendamento}
    ⏰ Horário: ${novoAgendamento.horario}

    Agradecemos muito pela sua solidariedade — sua doação pode salvar até três vidas!

    Caso precise reagendar ou tirar dúvidas, entre em contato com o hemocentro.

    Atenciosamente,
    Equipe Doe Vida `

  await connection.query(comando4,[ novoAgendamento.data_agendamento,novoAgendamento.horario,hemocentroId,usuario_id]);

  const comando5 = `
    select count(*) as quantidade from agenda_user
    where data_disponivel = ?
    and horario_disponivel = ?
    and hemocentros_id = ?
  `;

  const [countResult] = await connection.query(comando5, [novoAgendamento.data_agendamento, novoAgendamento.horario, hemocentroId]);
  const quantidade = countResult[0].quantidade;

  if (quantidade == 5) {
    
    const comando6 = `
      delete from agenda
      where data_disponivel = ?
      and horario_disponivel = ?
      and id_hemocentro = ?
    `;

    await connection.query(comando6, [novoAgendamento.data_agendamento, novoAgendamento.horario, hemocentroId]);
  }

  await transporter.sendMail({
    to: novoAgendamento.email,
    subject: assunto,
    text: texto
  });

  const comando7 = `
  select * from email_Estoque
  where id_doador = ?
  `
  const [registros] = await connection.query(comando7,[usuario_id]);
  
   if(registros.length == 0){
     const comando = `insert into email_Estoque (id_doador)
     values 
   (?)`

   await connection.query(comando,[usuario_id]);

   }
   else{
    const comando = `
    update email_Estoque
    set dia = current_timestamp
    where id_doador = ?
    ` 

    await connection.query(comando,[usuario_id]);
   }


  return info.insertId;
}

export async function consultarEmail(emailObj) {
  const comando = `
  select * from agendamentos
  where email = ?
  `;
  const [registros] = await connection.query(comando, [emailObj.email]);
  return registros;
}

export async function listarHemocentro(){
  const comando = `
  select id_hemocentro, nome_hemocentro, cidade_hemocentro, rua_hemocentro, bairro_hemocentro from hemocentros;
  `

  const [registros] = await connection.query(comando);

  return registros;
}


export async function listarHorarios(requisitos){
  // Converter data de DD/MM/YYYY para YYYY-MM-DD para o banco
  const partes = requisitos.data.split('/');
  if (partes.length !== 3) {
    throw new Error('Formato de data inválido. Use DD/MM/YYYY.');
  }
  const [dia, mes, ano] = partes;
  const dataFormatada = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

  const comando = `
select a.horario_disponivel from agenda a
inner join hemocentros h on h.id_hemocentro = a.id_hemocentro
where h.nome_hemocentro = ?
and a.data_disponivel = ?
  `

  const [datas] = await connection.query(comando, [requisitos.nome, dataFormatada]);

  return datas;
}
