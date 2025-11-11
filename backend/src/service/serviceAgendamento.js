import connection from "../repository/connetion.js";
import { validarAgendamento, validareListarHorarios  } from "../validation/agendamento/agendamentoValidation.js";
import {  agendamentoUsario, listarHemocentro, listarHorarios, verificarDias, atualizarAgendamentoUsuario } from '../repository/agendamentoRepository.js';

export default async function serviceAgendamento(novoAgendamento, usuario_id) {
    try {
        validarAgendamento(novoAgendamento);

        const comandoVerificar = `
            select id from agendamentos
            where usuario_id = ?
            limit 1
        `;
        const [registros] = await connection.query(comandoVerificar, [usuario_id]);

        if (registros.length > 0) {
           
            const resposta = await verificarDias(usuario_id, novoAgendamento.data_agendamento);
            if (resposta === 'up') {
                const id = await atualizarAgendamentoUsuario(novoAgendamento, usuario_id);
                return id;
            } else {
                throw new Error('Não é possível atualizar o agendamento. Verifique as regras de doação.');
            }
        } else {
            // Não tem agendamento, inserir novo
            const id = await agendamentoUsario(novoAgendamento, usuario_id);
            return id;
        }
    } catch (error) {
        throw error;
    }
}



export async function listarHemocentrosDisponiveisService() {
    const registros = await listarHemocentro();
    return registros;
}

export async function listarHorariosDisponiveis(requisitos) {
    try {
        validareListarHorarios(requisitos);
        const horarios = await listarHorarios(requisitos);
        let resposta;
        if (horarios && horarios.length > 0) {
            resposta = horarios.map(h => {
                // Converter horário para formato brasileiro (HH:MM)
                const [hora, minuto] = h.horario_disponivel.split(':');
                return `${hora}:${minuto}`;
            });
        }
        else {
            resposta = []
        }

        return resposta;
    }
    catch (error) {
        throw error
    }
}
