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
    usuario_id, hemocentro_id, nome_completo, email, telefone,
    estado, cidade, tipo_sanguineo, data_agendamento,
    horario, observacoes, confirmou_requisitos
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

  const [info] = await connection.query(comando, [
    usuario_id,
    novoAgendamento.hemocentro_id,
    novoAgendamento.nome_completo,
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