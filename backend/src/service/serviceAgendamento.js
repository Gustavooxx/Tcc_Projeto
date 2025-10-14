import { validarAgenda, validarAgendamento, validarEmailAgendamento } from "../validation/agendamento/agendamentoValidation.js";
import { consultarEmail, agendamentoUsario, listarAgenda, listarHemocentro } from '../repository/agendamentoRepository.js';

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

export async function listarAgendaService(nome){

try {
    const registros = await listarAgenda(nome);
    
    validarAgenda(nome,registros);
    
    return registros;
    
} 
catch (error) {
    throw error;    
}




}

export async function listarHemocentrosDisponiveisService(){
    const registros = await listarHemocentro();
     return registros;
}