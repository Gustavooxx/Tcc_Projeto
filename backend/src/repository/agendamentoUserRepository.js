import connection from "./connetion.js";

export async function listarAgendamentoUsario(usuario_id){
    const comando = `
    select a.id, a.data_agendamento, a.horario, h.id_hemocentro, h.nome_hemocentro, h.cidade_hemocentro, h.bairro_hemocentro, h.rua_hemocentro
    from agendamentos a
    inner join hemocentros h on a.hemocentro_id = h.id_hemocentro
    where a.usuario_id = ?
    `
    const [registros] = await connection.query(comando,[usuario_id])
    console.log('Registros encontrados:', registros);
    return registros;
}

export async function deletarAgendamento(id_agendamento){
    const comando = `
    delete from agendamentos
    where id = ?
    `
    const [registros] = await connection.query(comando,[id_agendamento])
    return registros;
}

export async function atualizarInformacoes(nova_informacao, id_cadastro) {
    const comando = `update cadastro_users set nome_completo = ?, email = ?, telefone = ? where id_cadastro = ? `;
    const [registros] = await connection.query(comando, [nova_informacao.nome_completo, nova_informacao.email, nova_informacao.telefone, id_cadastro]);
    return registros;
}

export async function atualizarSenha(senha, id_cadastro) {
    const comando = `update cadastro_users set senha = MD5(?) where id_cadastro = ? `;
    const [registros] = await connection.query(comando, [senha, id_cadastro]);
    return registros;
}


export async function editarAgendamento(atualizarAgendamento) {
    const comando = `update agendamentos set data_agendamento = ?, horario = ?,  where id = ? `;
    const [registros] = await connection.query(comando, [atualizarAgendamento.data_agendamento, atualizarAgendamento.horario, atualizarAgendamento.id]);
    return registros;
}

export async function editarAgendamentoCompleto(atualizarAgendamento) {
    const comando = `update agendamentos set hemocentro_id = ?, data_agendamento = ?, horario = ? where id = ? `;
    const [registros] = await connection.query(comando, [atualizarAgendamento.id_hemocentro, atualizarAgendamento.data_agendamento, atualizarAgendamento.horario, atualizarAgendamento.id]);
    return registros;
}
