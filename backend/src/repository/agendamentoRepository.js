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
  // Data já vem no formato YYYY-MM-DD do frontend
  const dataFormatada = novoAgendamento.data_agendamento;

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
    dataFormatada,
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
 
  const dataString = requisitos.data.trim();
  const partes = dataString.split('/');
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

export async function verificarDias(usuario_id,novaData){
 
  const novaDataObj = new Date(novaData);

  const comando = `
   select data_agendamento from agendamentos
  where usuario_id = ?
order by data_agendamento desc
limit 1
  `

  const [registro] = await connection.query(comando,[usuario_id]);

  if(registro.length === 1){

    const dataAgendamento = registro[0].data_agendamento;

    let diffDias;

    if(novaDataObj > dataAgendamento){
      diffDias = (novaDataObj - dataAgendamento) / (1000 * 60 * 60 * 24);

      if(diffDias >= 75){
        return 'up'
      }
      else{
        throw new Error('Faz menos de 75 dias que você doou pela última vez')
      }

    }

    else if(dataAgendamento >= novaDataObj){
      throw new Error('Você já tem um agendamento marcada para esse periodo')
    }
  }

  else{
    return 'ok'
  }
}

export async function atualizarAgendamentoUsuario(agendamentoAtualizado, usuario_id) {
 
  const dataFormatada = agendamentoAtualizado.data_agendamento;

  const comandoId = `
    select id from agendamentos
    where usuario_id = ?
    order by data_agendamento desc
    limit 1
  `;
  const [idResult] = await connection.query(comandoId, [usuario_id]);
  if (idResult.length === 0) {
    throw new Error('Nenhum agendamento encontrado para este usuário.');
  }
  const agendamentoId = idResult[0].id;

  const comando = `
    update agendamentos
    set
      nome_completo = ?,
      email = ?,
      telefone = ?,
      estado = ?,
      cpf = ?,
      cidade = ?,
      tipo_sanguineo = ?,
      data_agendamento = ?,
      horario = ?,
      observacoes = ?,
      confirmou_requisitos = ?
    where id = ?
  `;

  await connection.query(comando, [
    agendamentoAtualizado.nome_completo,
    agendamentoAtualizado.email,
    agendamentoAtualizado.telefone,
    agendamentoAtualizado.estado,
    agendamentoAtualizado.cpf,
    agendamentoAtualizado.cidade,
    agendamentoAtualizado.tipo_sanguineo,
    dataFormatada,
    agendamentoAtualizado.horario,
    agendamentoAtualizado.observacoes,
    agendamentoAtualizado.confirmou_requisitos,
    agendamentoId
  ]);

  const comando2 = `
    select id_hemocentro from hemocentros
    where nome_hemocentro = ?
  `;
  const [hemocentroResult] = await connection.query(comando2, [agendamentoAtualizado.nome_hemocentro]);
  const hemocentroId = hemocentroResult[0]?.id_hemocentro;

  const comando3 = `
    update agendamentos
    set hemocentro_id = ?
    where id = ?
  `;
  await connection.query(comando3, [hemocentroId, agendamentoId]);

  const comando4 = `
    update agenda_user
    set data_disponivel = ?,
        horario_disponivel = ?,
        hemocentros_id = ?
    where usuario_id = ?
  `;
  await connection.query(comando4, [
    dataFormatada,
    agendamentoAtualizado.horario,
    hemocentroId,
    usuario_id
  ]);

  const comando5 = `
    select count(*) as quantidade
    from agenda_user
    where data_disponivel = ?
      and horario_disponivel = ?
      and hemocentros_id = ?
  `;
  const [countResult] = await connection.query(comando5, [
    dataFormatada,
    agendamentoAtualizado.horario,
    hemocentroId
  ]);
  const quantidade = countResult[0].quantidade;

  if (quantidade === 5) {
    const comando6 = `
      delete from agenda
      where data_disponivel = ?
        and horario_disponivel = ?
        and id_hemocentro = ?
    `;
    await connection.query(comando6, [
      dataFormatada,
      agendamentoAtualizado.horario,
      hemocentroId
    ]);
  }

  const comando7 = `
    select * from email_Estoque
    where id_doador = ?
  `;
  const [registros] = await connection.query(comando7, [usuario_id]);

  if (registros.length === 0) {
    const comando = `
      insert into email_Estoque (id_doador)
      values (?)
    `;
    await connection.query(comando, [usuario_id]);
  } else {
    const comando = `
      update email_Estoque
      set dia = current_timestamp
      where id_doador = ?
    `;
    await connection.query(comando, [usuario_id]);
  }

  const assunto = 'Confirmação do seu agendamento de doação de sangue 🩸';
  const texto = `Olá, ${agendamentoAtualizado.nome_completo}!

Seu agendamento foi agendado com sucesso. ❤️

🏥 Hemocentro: ${agendamentoAtualizado.nome_hemocentro}
📅 Nova Data: ${agendamentoAtualizado.data_agendamento}
⏰ Novo Horário: ${agendamentoAtualizado.horario}

Agradecemos muito pela sua solidariedade — sua doação pode salvar até três vidas!

Atenciosamente,
Equipe Doe Vida`;

  await transporter.sendMail({
    to: agendamentoAtualizado.email,
    subject: assunto,
    text: texto
  });

  return agendamentoId;
}

