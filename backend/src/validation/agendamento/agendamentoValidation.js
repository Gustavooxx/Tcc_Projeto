

export function validarAgendamento(agendamento) {

    if (!agendamento.nome_completo)
        throw new Error('Nome obrigatório');


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
    

    if (!agendamento.confirmou_requisitos)
        throw new Error('Requisitos obrigatório');

}

export function validarEmailAgendamento(registro){
     if(registro && registro.length > 0){
        throw new Error('Email já cadastrado');
    }
}


export function validarAgenda(nome,registro){
    if (!nome){
        throw new Error('É necessario selecionar um hemocentro ');
    }

    if(!registro){
        throw new Error('Não tem horarios disponiveis para esse hemocentro');

    }
} 