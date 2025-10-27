import { cadastroVoluntario } from "../repository/voluntariosRepository.js";
import validarVoluntarios from "../validation/voluntarios/voluntariosValidation.js"


export async function cadastrarVoluntariosService(infos,usuario_id){
try {
    // Set mensagem to 'sem mensagem' if empty
    infos.mensagem = infos.mensagem || 'sem mensagem';

    validarVoluntarios(infos,usuario_id);

    const id = await cadastroVoluntario(infos,usuario_id)
    return id;
}
catch (error) {
throw error
}

}
