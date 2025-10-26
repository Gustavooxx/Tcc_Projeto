import connection from "./connetion.js";

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
    usuario_id, nome_completo,cpf, email, telefone,
    estado, cidade, tipo_sanguineo, data_agendamento,
    horario, observacoes, confirmou_requisitos
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
`;

  const [info] = await connection.query(comando, [
    usuario_id,
    novoAgendamento.nome_completo,
    novoAgendamento.cpf,
    novoAgendamento.email,
    novoAgendamento.telefone,
    novoAgendamento.estado,
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
  select distinct h.nome_hemocentro from agenda a
inner join hemocentros h on h.id_hemocentro = a.id_hemocentro;
  `

  const [registros] = await connection.query(comando);

  return registros;
}


export async function listarHorarios(requisitos){
  // Converter data de DD/MM/YYYY para YYYY-MM-DD para o banco
  const [dia, mes, ano] = requisitos.data.split('/');
  const dataFormatada = `${ano}-${mes}-${dia}`;

  const comando = `
select a.horario_disponivel from agenda a
inner join hemocentros h on h.id_hemocentro = a.id_hemocentro
where h.nome_hemocentro = ?
and a.data_disponivel = ?
  `

  const [datas] = await connection.query(comando, [requisitos.nome, dataFormatada]);

  return datas;
}

