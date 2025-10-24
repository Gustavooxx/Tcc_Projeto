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
  select nome_hemocentro_verificar from verificar_hemocentros
  `

  const [registros] = await connection.query(comando);

  return registros;
}

export async function listarAgenda(nome){
  const comando = `
  select * from verificar_hemocentros
  where nome_hemocentro_verificar = ?
  `

  const [registros] = await connection.query(comando, [nome]);

  return registros[0];

}