import { validarAgendamento, validareListarHorarios, validarEmailAgendamento } from "../validation/agendamento/agendamentoValidation.js";
import { consultarEmail, agendamentoUsario, listarHemocentro, listarHorarios } from '../repository/agendamentoRepository.js';

export default async function serviceAgendamento(novoAgendamento, usuario_id){
    try {
        // valida os campos do agendamento
        validarAgendamento(novoAgendamento);

        // verifica se já existe agendamento com o mesmo email
        const registros = await consultarEmail({ email: novoAgendamento.email });
        validarEmailAgendamento(registros);

        // insere o agendamento, passando o usuario_id que fez a requisição
        const id = await agendamentoUsario(novoAgendamento, usuario_id);
        return id;


    } catch (error) {
        throw error;
    }
}



export async function listarHemocentrosDisponiveisService(){
    const registros = await listarHemocentro();
     return registros;
}

export async function listarHorariosDisponiveis(requisitos){
    try {
     validareListarHorarios(requisitos);
    const horarios = await listarHorarios(requisitos);
    let resposta;
if(horarios && horarios.length > 0){
resposta = horarios.map(h => {
    // Converter horário para formato brasileiro (HH:MM)
    const [hora, minuto] = h.horario_disponivel.split(':');
    return `${hora}:${minuto}`;
});
}
else {
    resposta = 'Não temos horarios para o dia selecionado'
}

return resposta;
    }
    catch (error) {
        throw error
    }
}
