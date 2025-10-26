

export function validarAgendamento(agendamento) {

    if (!agendamento.nome_completo)
        throw new Error('Nome obrigatório');

    if (!agendamento.cpf)
        throw new Error('CPF obrigatório');

    if (!agendamento.email)
        throw new Error('Email obrigatório');


    if (!agendamento.telefone)
        throw new Error('Telefone obrigatório');


    if (!agendamento.estado)
        throw new Error('Estado obrigatório');


    if (!agendamento.cidade)
        throw new Error('Cidade obrigatório');


    if (!agendamento.nome_hemocentro)
        throw new Error('Hemocentro obrigatório');


    if (!agendamento.tipo_sanguineo)
        throw new Error('Tipo sanguíneo obrigatório');


    if (!agendamento.data_agendamento)
        throw new Error('Data obrigatória');


    if (!agendamento.horario)
        throw new Error('Horário obrigatório');

    if (typeof agendamento.horario === 'string' && agendamento.horario.trim() === '')
        throw new Error('Escolha outro dia e horário');


    if (!agendamento.confirmou_requisitos)
        throw new Error('Requisitos obrigatório');

}

export function validarEmailAgendamento(registro){
     if(registro && registro.length > 0){
        throw new Error('Email já cadastrado');
    }
}

export async function validareListarHorarios(requisitos){
if(!requisitos.nome)
    throw new Error('Escolha hemocentro');
if(!requisitos.data)
    throw new Error('escolha data');

// Validar formato da data: DD/MM/YYYY
const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
if (!dataRegex.test(requisitos.data)) {
    throw new Error('Data deve estar no formato DD/MM/YYYY');
}

}


